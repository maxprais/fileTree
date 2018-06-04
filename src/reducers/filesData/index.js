import { FILES_ACTION_TYPES } from '../../actions/filesData/actionTypes';
import _ from 'lodash';

const initialState = {
  files: []
};
export const FilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILES_ACTION_TYPES.GET_ALL_FILES:
      console.log(_.map(action.payload));
      return { ...state, files: _.map(action.payload) };
    default:
      return state;
  }
};
