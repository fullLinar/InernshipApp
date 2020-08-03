import {
  FETCH_COLUMNS,
  FETCH_COLUMN,
  ON_CHAGE_IS_FETCHING,
  TOGGLE_IS_ADD_INPUT,
  SET_COLUMN_TITLE,
} from '../reducers/columnsReducer';
import {
  getColumnsFromAPI,
  setColumn,
  deleteColumn,
  retrieveToken,
  editColumnData,
} from '../api/api';

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

export const toggleIsAddInput = () => {
  return {
    type: TOGGLE_IS_ADD_INPUT,
  };
};

export const setColumnTitle = (titleText) => {
  return {
    type: SET_COLUMN_TITLE,
    payload: { titleText },
  };
};

export const setColumnsFromAPI = () => {
  return async (dispatch) => {
    dispatch({ type: ON_CHAGE_IS_FETCHING, payload: { isFetching: true } });
    const token = await retrieveToken();

    getColumnsFromAPI(token).then(({ data }) => {
      dispatch(fetchColumns(data));
      dispatch({
        type: ON_CHAGE_IS_FETCHING,
        payload: { isFetching: false },
      });
    });
  };
};

export const setColumnToAPI = (columnData) => {
  return async (dispatch) => {
    dispatch({ type: ON_CHAGE_IS_FETCHING, payload: { isFetching: true } });
    const token = await retrieveToken();

    setColumn(columnData, token).then(({ data }) => {
      if (data.id) {
        dispatch(fetchColumn(data));
        dispatch(toggleIsAddInput());
        dispatch(setColumnTitle(''));

        dispatch({
          type: ON_CHAGE_IS_FETCHING,
          payload: { isFetching: false },
        });
      }
    });
  };
};

export const deleteColumnFromAPI = (colId) => {
  return async (dispatch) => {
    dispatch({ type: ON_CHAGE_IS_FETCHING, payload: { isFetching: true } });
    const token = await retrieveToken();

    deleteColumn(colId, token).then(({ data }) => {
      if (data.raw) {
        dispatch({
          type: ON_CHAGE_IS_FETCHING,
          payload: { isFetching: false },
        });
      }
    });
  };
};

export const editColumnTitle = (columnData, colId) => {
  return async (dispatch) => {
    dispatch({ type: ON_CHAGE_IS_FETCHING, payload: { isFetching: true } });
    const token = await retrieveToken();

    editColumnData(columnData, colId, token).then((response) => {
      console.log(response);
      dispatch({ type: ON_CHAGE_IS_FETCHING, payload: { isFetching: false } });
    });
  };
};
