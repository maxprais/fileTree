import { FILES_ACTION_TYPES } from '../../actions/filesData/actionTypes';

const initialState = {
  files: {}
};
export const FilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILES_ACTION_TYPES.GET_ALL_FILES:
      return { ...state, files: action.payload };
    default:
      return state;
  }
};
