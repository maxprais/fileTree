import { FILES_ACTION_TYPES } from '../../actions/filesData/actionTypes';
import { map, chain, cloneDeep, escapeRegExp } from 'lodash';
import { FILES } from '../../consts/files';
import { TreeDepthCalculator } from './depthCalculator';

const initialState = {
  files: []
};
export const FilesReducer = (state = initialState, action) => {
  if (!this.treeDepthCalculator) {
    this.treeDepthCalculator = new TreeDepthCalculator();
  }

  switch (action.type) {
    case FILES_ACTION_TYPES.GET_ALL_FILES:
      return { ...state, files: map(action.payload) };
    case FILES_ACTION_TYPES.GET_FILES_BY_ID:
      const concatFiles = chain(state.files)
        .flatten()
        .concat(action.payload)
        .uniqBy('id')
        .value();

      const filesWithCalculatedDepth = this.treeDepthCalculator
        .getFilesTreeDepth(concatFiles, map(cloneDeep(FILES)));

      const filesById = chain(filesWithCalculatedDepth)
        .groupBy('depth')
        .map()
        .value();
      console.log('filesById', filesById);

      return { ...state, files: filesById };
    case FILES_ACTION_TYPES.SEARCH_FILES_BY_TITLE:
      const searchTerm = escapeRegExp(action.payload);
      const regex = new RegExp(searchTerm, 'i');
      const allFiles = map(cloneDeep(FILES));

      const filesWithDepth = this.treeDepthCalculator
        .getFilesTreeDepth(allFiles, allFiles);

      const files = chain(filesWithDepth)
        .filter(file => file.title.match(regex))
        .groupBy('depth')
        .map()
        .value();

      return { ...state, files };
    default:
      return state;
  }
};
