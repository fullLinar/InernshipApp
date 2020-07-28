import {
  FETCH_COLUMNS,
  FETCH_COLUMN,
  ON_CHAGE_IS_FETCHING,
  TOGGLE_IS_ADD_INPUT,
  SET_COLUMN_TITLE,
} from '../reducers/columnsReducer';
import { getColumnsFromAPI, setColumn } from '../api/api';

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

export const setColumnsFromAPI = (token) => {
  return (dispatch) => {
    dispatch({ type: ON_CHAGE_IS_FETCHING, payload: { isFetching: true } });

    getColumnsFromAPI(token).then(({ data }) => {
      const columns = data;
      dispatch(fetchColumns(columns));
      dispatch({
        type: ON_CHAGE_IS_FETCHING,
        payload: { isFetching: false },
      });
    });
  };
};

export const setColumnToAPI = (columnData, token) => {
  return (dispatch) => {
    dispatch({ type: ON_CHAGE_IS_FETCHING, payload: { isFetching: true } });

    setColumn(columnData, token).then(({ data }) => {
      const column = data;
      dispatch(fetchColumn(column));
      dispatch({
        type: ON_CHAGE_IS_FETCHING,
        payload: { isFetching: false },
      });
    });
  };
};
