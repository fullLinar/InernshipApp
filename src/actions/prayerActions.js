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

const fetchEditedPrayerTitle = (prayerId, title) => {
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

    return ApiService.getPrayers(token).then(({ data }) => {
      dispatch(setPrayers(data));
      dispatch(toggleIsFetching(false));
    });
  };
};

export const addPrayer = (prayerData) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    return ApiService.setPrayer(prayerData, token).then(({ data }) => {
      if (data.id) {
        const newPrayer = { ...data, commentsIds: [] };
        dispatch(fetchPrayer(newPrayer));
        dispatch(toggleIsFetching(false));
      }
    });
  };
};

export const onChangePrayerChecked = (prayerData, prayerId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();

    return ApiService.toggleCheckedPrayer(prayerData, prayerId, token).then(
      ({ data }) => {
        if (data.id) {
          dispatch(fetchChangedChecked(prayerId, data.checked));
          dispatch(toggleIsFetching(false));
        }
      },
    );
  };
};

export const deletePrayer = (prayerId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();
    return ApiService.deletePrayer(prayerId, token).then(({ data }) => {
      if (data.raw) {
        dispatch(fetchDeletedPrayer(prayerId));
        dispatch(toggleIsFetching(false));
      }
    });
  };
};

export const editPrayerTitle = (prayerData, prayerId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const token = await retrieveToken();

    return ApiService.editPrayerTitle(prayerData, prayerId, token).then(
      ({ data }) => {
        if (data.id) {
          dispatch(fetchEditedPrayerTitle(prayerId, data.title));
          dispatch(toggleIsFetching(false));
        }
      },
    );
  };
};
