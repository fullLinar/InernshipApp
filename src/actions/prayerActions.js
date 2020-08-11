import {
  FETCH_PRAYERS,
  FETCH_PRAYER,
  FETCH_CHANGED_CHECKED,
  FETCH_DELETED_PRAYER,
  TOGGLE_SHOW_CHECKED,
} from '../reducers/prayersReducer';
import { toggleIsFetching } from './columnActions';
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

const fetchChangedChecked = (prayerId, checked) => {
  return {
    type: FETCH_CHANGED_CHECKED,
    payload: {
      prayerId,
      checked,
    },
  };
};

const fetchDeletedPrayer = (prayerId) => {
  return {
    type: FETCH_DELETED_PRAYER,
    payload: { prayerId },
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
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();

    return getPrayersFromAPI(token).then(({ data }) => {
      dispatch(setPrayers(data));
      dispatch(toggleIsFetching(false));
    });
  };
};

export const setPrayerToAPI = (prayerData) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    return setPrayer(prayerData, token).then(({ data }) => {
      if (data.id) {
        dispatch(fetchPrayer(data));
        dispatch(toggleIsFetching(false));
      }
    });
  };
};

export const setCheckedPrayerToAPI = (prayerData, prayerId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();

    return toggleCheckedPrayer(prayerData, prayerId, token).then(({ data }) => {
      if (data.id) {
        dispatch(fetchChangedChecked(prayerId, data.checked));
        dispatch(toggleIsFetching(false));
      }
    });
  };
};

export const deletePrayerFromAPI = (prayerId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    return deletePrayer(prayerId, token).then(({ data }) => {
      if (data.raw) {
        dispatch(fetchDeletedPrayer(prayerId));
        dispatch(toggleIsFetching(false));
      }
    });
  };
};
