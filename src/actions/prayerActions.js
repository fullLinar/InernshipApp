import {
  FETCH_PRAYERS,
  FETCH_PRAYER,
  FETCH_CHANGED_CHECKED,
  FETCH_DELETED_PRAYER,
  TOGGLE_SHOW_CHECKED,
  FETCH_EDITED_PRAYER_TITLE,
} from '../reducers/prayersReducer';
import { toggleIsFetching } from './columnActions';
import ApiService from '../utils/ApiService';

import { retrieveToken } from '../utils/utils';
const setPrayers = ({ data }) => {
  return {
    type: FETCH_PRAYERS,
    payload: { data },
  };
};

const fetchPrayer = ({ newPrayer }) => {
  return {
    type: FETCH_PRAYER,
    payload: { newPrayer },
  };
};

const fetchChangedChecked = ({ prayerId, checked }) => {
  return {
    type: FETCH_CHANGED_CHECKED,
    payload: {
      prayerId,
      checked,
    },
  };
};

const fetchDeletedPrayer = ({ prayerId }) => {
  return {
    type: FETCH_DELETED_PRAYER,
    payload: { prayerId },
  };
};

const fetchEditedPrayerTitle = ({ prayerId, title }) => {
  return {
    type: FETCH_EDITED_PRAYER_TITLE,
    payload: {
      prayerId,
      title,
    },
  };
};

export const toggleShowChecked = () => {
  return {
    type: TOGGLE_SHOW_CHECKED,
  };
};

//-----------------------Thunks--------------------------

export const getPrayers = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    const { data } = await ApiService.getPrayers({ token });
    try {
      dispatch(setPrayers({ data }));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};

export const addPrayer = ({ prayerData }) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    const { data } = await ApiService.setPrayer({ prayerData, token });
    try {
      const newPrayer = { ...data, commentsIds: [] };
      dispatch(fetchPrayer({ newPrayer }));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};

export const onChangePrayerChecked = ({ prayerData, prayerId }) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    const { data } = await ApiService.toggleCheckedPrayer({
      prayerData,
      prayerId,
      token,
    });
    try {
      const { checked } = data;
      dispatch(fetchChangedChecked({ prayerId, checked }));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};

export const deletePrayer = ({ prayerId }) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    await ApiService.deletePrayer({ prayerId, token });
    try {
      dispatch(fetchDeletedPrayer({ prayerId }));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};

export const editPrayerTitle = ({ prayerData, prayerId }) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    const { data } = await ApiService.editPrayerTitle({
      prayerData,
      prayerId,
      token,
    });
    try {
      const { title } = data;
      dispatch(fetchEditedPrayerTitle({ prayerId, title }));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      throw err;
    }
  };
};
