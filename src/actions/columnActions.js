import {
  FETCH_COLUMNS,
  FETCH_COLUMN,
  FETCH_CHANGED_TITLE,
  FETCH_DELETED_COLUMN,
  ON_CHANGE_IS_FETCHING,
  TOGGLE_IS_ADD_INPUT,
} from '../reducers/columnsReducer';
import ApiService from '../utils/ApiService';

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

const fetchNewColumnTitle = ({ id, title }) => {
  return {
    type: FETCH_CHANGED_TITLE,
    payload: {
      colId: id,
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
    const { data } = await ApiService.getColumns();
    try {
      dispatch(fetchColumns(data));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};

export const addColumn = ({ columnData }) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const { data } = await ApiService.setColumn({ columnData });
    try {
      dispatch(fetchColumn(data));
      dispatch(toggleIsAddInput());
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};

export const deleteColumn = ({ colId }) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    await ApiService.deleteColumn({ colId });
    try {
      dispatch(fetchDeletedColumn(colId));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};

export const editColumnTitle = ({ columnData, colId }) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const { data } = await ApiService.editColumnData({
      columnData,
      colId,
    });
    try {
      const { id, title } = data;
      dispatch(fetchNewColumnTitle({ id, title }));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};
