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

export const setColumnsFromAPI = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();

    ApiService.getColumnsFromAPI(token).then(({ data }) => {
      dispatch(fetchColumns(data));
      dispatch(toggleIsFetching(false));
    });
  };
};

export const setColumnToAPI = (columnData) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();

    ApiService.setColumn(columnData, token).then(({ data }) => {
      if (data.id) {
        dispatch(fetchColumn(data));
        dispatch(toggleIsAddInput());
        dispatch(toggleIsFetching(false));
      }
    });
  };
};

export const deleteColumnFromAPI = (colId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    return ApiService.deleteColumn(colId, token).then(
      dispatch(fetchDeletedColumn(colId)),
      dispatch(toggleIsFetching(false)),
    );
  };
};

export const editColumnTitle = (columnData, colId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();

    return ApiService.editColumnData(columnData, colId, token).then(
      ({ data }) => {
        dispatch(fetchNewColumnTitle(data.id, data.title));
        dispatch(toggleIsFetching(false));
      },
    );
  };
};
