import {
  FETCH_PRAYERS,
  FETCH_PRAYER,
  ON_CHANGE_NEW_PRAYER_TITLE,
  TOGGLE_SHOW_CHECKED,
} from '../reducers/prayersReducer';
import { ON_CHAGE_IS_FETCHING } from '../reducers/columnsReducer';
import {
  getPrayersFromAPI,
  setPrayer,
  retrieveToken,
  toggleCheckedPrayer,
  deletePrayer,
} from '../api/api';

const setPrayers = (data) => {
  return {
    type: FETCH_PRAYERS,
    payload: { data },
  };
};

const fetchPrayer = (data) => {
  return {
    type: FETCH_PRAYER,
    payload: { data },
  };
};

export const onChageNewPrayerTitle = (titleText) => {
  return {
    type: ON_CHANGE_NEW_PRAYER_TITLE,
    payload: { titleText },
  };
};

export const toggleShowChecked = () => {
  return {
    type: TOGGLE_SHOW_CHECKED,
  };
};

//----------------Thunks-------------------
export const setPrayersFromAPI = () => {
  return async (dispatch) => {
    dispatch({ type: ON_CHAGE_IS_FETCHING, payload: { isFetching: true } });
    const token = await retrieveToken();

    return getPrayersFromAPI(token).then(({ data }) => {
      dispatch(setPrayers(data));
      dispatch({ type: ON_CHAGE_IS_FETCHING, payload: { isFetching: false } });
    });
  };
};

export const setPrayerToAPI = (prayerData) => {
  return async (dispatch) => {
    const token = await retrieveToken();

    return setPrayer(prayerData, token).then(({ data }) => {
      if (data.id) {
        dispatch(fetchPrayer(data));
        dispatch(onChageNewPrayerTitle(''));
      }
    });
  };
};

export const setCheckedPrayerToAPI = (prayerData, prayerId) => {
  return async (dispatch) => {
    const token = await retrieveToken();

    return toggleCheckedPrayer(prayerData, prayerId, token);
  };
};

export const deletePrayerFromAPI = (prayerId) => {
  return async (dispatch) => {
    const token = await retrieveToken();
    return deletePrayer(prayerId, token);
  };
};
