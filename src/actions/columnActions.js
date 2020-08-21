import {
  FETCH_COLUMNS,
  FETCH_COLUMN,
  FETCH_CHANGED_TITLE,
  FETCH_DELETED_COLUMN,
  ON_CHANGE_IS_FETCHING,
  TOGGLE_IS_ADD_INPUT,
} from '../reducers/columnsReducer';
import ApiService from '../utils/ApiService';
import { retrieveToken } from '../utils/utils';

const fetchColumns = (columns) => {
  return {
    type: FETCH_COLUMNS,
    payload: { columns },
  };
};

const fetchColumn = (column) => {
  return {
    type: FETCH_COLUMN,
    payload: { column },
  };
};

const fetchNewColumnTitle = (colId, title) => {
  return {
    type: FETCH_CHANGED_TITLE,
    payload: {
      colId,
      title,
    },
  };
};

const fetchDeletedColumn = (colId) => {
  return {
    type: FETCH_DELETED_COLUMN,
    payload: { colId },
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: ON_CHANGE_IS_FETCHING,
    payload: { isFetching },
  };
};

export const toggleIsAddInput = () => {
  return {
    type: TOGGLE_IS_ADD_INPUT,
  };
};

//-----------------------Thunks--------------------------

export const getColumns = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    const { data } = await ApiService.getColumns(token);
    try {
      dispatch(fetchColumns(data));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};

export const addColumn = (columnData) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    const { data } = await ApiService.setColumn(columnData, token);
    try {
      dispatch(fetchColumn(data));
      dispatch(toggleIsAddInput());
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};

export const deleteColumn = (colId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    await ApiService.deleteColumn(colId, token);
    try {
      dispatch(fetchDeletedColumn(colId));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};

export const editColumnTitle = (columnData, colId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    const { data } = await ApiService.editColumnData(columnData, colId, token);
    try {
      dispatch(fetchNewColumnTitle(data.id, data.title));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};
