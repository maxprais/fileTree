import { FILES_ACTION_TYPES } from '../../actions/filesData/actionTypes';
import { map, chain, isNull, find, reduce, groupBy, set, cloneDeep } from 'lodash';
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
      const allFiles = chain(state.files)
        .flatten()
        .concat(action.payload)
        .uniqBy('id')
        .value();

      const filesWithCalculatedDepth = this.treeDepthCalculator
        .getFilesTreeDepth(allFiles, map(cloneDeep(FILES)));

      const files = chain(filesWithCalculatedDepth)
        .groupBy('depth')
        .map()
        .value();

      return { ...state, files: files };
    default:
      return state;
  }
};
