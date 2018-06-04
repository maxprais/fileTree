import store from '../../store/index';
import { FILES_ACTION_TYPES } from './actionTypes';
import { FILES } from '../../consts/files';
import { map } from 'lodash';

export const getAllFiles = () => {
  store.dispatch({ type: FILES_ACTION_TYPES.GET_ALL_FILES, payload: FILES });
};