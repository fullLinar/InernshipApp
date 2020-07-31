export const FETCH_PRAYERS = 'FETCH-PRAYERS';
export const FETCH_PRAYER = 'FETCH-PRAYER';
export const ON_CHANGE_NEW_PRAYER_TITLE = 'ON-CHANGE-NEW-PRAYER-TITLE';
export const TOGGLE_SHOW_CHECKED = 'TOGGLE-SHOW-CHECKED';

const initialState = {
  isShowCheckedPrayers: true,
  title: '',
  description: '',
  prayers: [],
};

const actionMap = {
  [FETCH_PRAYERS]: (state, action) => {
    return {
      ...state,
      prayers: action.payload.data,
    };
  },
  [FETCH_PRAYER]: (state, action) => {
    return {
      ...state,
      prayers: [...state.prayers, action.payload.data],
    };
  },
  [ON_CHANGE_NEW_PRAYER_TITLE]: (state, action) => {
    return {
      ...state,
      title: action.payload.titleText,
    };
  },
  [TOGGLE_SHOW_CHECKED]: (state) => {
    return {
      ...state,
      isShowCheckedPrayers: state.isShowCheckedPrayers ? false : true,
    };
  },
};

export default function prayersReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
