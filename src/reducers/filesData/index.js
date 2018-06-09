import { FILES_ACTION_TYPES } from '../../actions/filesData/actionTypes';
import { map, chain, cloneDeep, escapeRegExp, size, groupBy } from 'lodash';
import { FILES } from '../../consts/files';
import { TreeDepthCalculator } from './depthCalculator';

const initialState = {
  files: []
};
export const FilesReducer = (state = initialState, action) => {
  const allFiles = map(cloneDeep(FILES));
  if (!this.treeDepthCalculator) {
    this.treeDepthCalculator = new TreeDepthCalculator();
  }

  switch (action.type) {
    case FILES_ACTION_TYPES.GET_ALL_FILES:
      return { ...state, files: map(action.payload) };
    case FILES_ACTION_TYPES.GET_FILES_BY_ID:
      const stateFiles = chain(state.files)
        .flatten()
        .uniqBy('id')
        .value();

      const filesWithCalculatedDepth = this.treeDepthCalculator
        .getFilesTreeDepth(stateFiles, allFiles);

      const newFilesWithCalculatedDepth = this.treeDepthCalculator
        .getFilesTreeDepth(action.payload, allFiles);

      const stateFilesGrouped = groupBy(filesWithCalculatedDepth, 'depth');
      const newFilesGrouped = groupBy(newFilesWithCalculatedDepth, 'depth');

      const newFilesDepth = chain(newFilesGrouped)
        .keys()
        .head()
        .value();

      const filesToReturn = chain(stateFilesGrouped)
        .assign(newFilesGrouped)
        .map()
        .slice(0, newFilesDepth)
        .value();

      return { ...state, files: filesToReturn };
    case FILES_ACTION_TYPES.SEARCH_FILES_BY_TITLE:
      const searchTerm = escapeRegExp(action.payload);
      const regex = new RegExp(searchTerm, 'i');

      const filesWithDepth = this.treeDepthCalculator
        .getFilesTreeDepth(allFiles, allFiles);

      const files = searchTerm
        ? chain(filesWithDepth)
          .filter(file => file.title.match(regex))
          .groupBy('depth')
          .map()
          .value()
        : chain(filesWithDepth)
          .groupBy('depth')
          .map()
          .slice(0, 1)
          .value() ;

      return { ...state, files };
    case FILES_ACTION_TYPES.SORT_FILES:
      const sortedFiles = chain(state.files)
        .flatten()
        .sortBy(action.payload)
        .groupBy('depth')
        .map()
        .value();

      return { ...state, files: sortedFiles };
    default:
      return state;
  }
};
