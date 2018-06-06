import { FILES_ACTION_TYPES } from '../../actions/filesData/actionTypes';
import { map, chain } from 'lodash';

const initialState = {
  files: []
};
export const FilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILES_ACTION_TYPES.GET_ALL_FILES:
      return { ...state, files: map(action.payload) };
    case FILES_ACTION_TYPES.GET_FILES_BY_ID:
      const files = chain(state.files)
        .flatten()
        .concat(action.payload)
        .uniqBy('id')
        .groupBy('parentId')
        .map()
        .value();
      console.log(state.files);
      console.log('files', files);
      return { ...state, files: files };
    default:
      return state;
  }
};
