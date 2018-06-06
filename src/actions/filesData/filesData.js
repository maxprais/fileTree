import store from '../../store/index';
import { FILES_ACTION_TYPES } from './actionTypes';
import { FILES } from '../../consts/files';
import { map, filter, get, cloneDeep } from 'lodash';

export const getAllFiles = () => {
  const allFiles = cloneDeep(FILES);
  store.dispatch({ type: FILES_ACTION_TYPES.GET_ALL_FILES, payload: allFiles });
};

export const getFilesById = (id) => {
  const allFiles = cloneDeep(map(FILES));
  const groupedFiles = filter(allFiles, { parentId: id });
  console.log('groupedFiles', groupedFiles);
  store.dispatch({ type: FILES_ACTION_TYPES.GET_FILES_BY_ID, payload: groupedFiles });
};