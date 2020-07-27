import { FETCH_COLUMNS, ON_CHAGE_IS_FETCHING } from '../reducers/deskReducer';
import { getColumnsFromAPI } from '../utils/utils';

const fetchColumns = (columns) => {
  return {
    type: FETCH_COLUMNS,
    payload: { columns },
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
