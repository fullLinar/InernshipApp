export const FETCH_PRAYERS = 'FETCH-PRAYERS';
export const FETCH_PRAYER = 'FETCH-PRAYER';
export const FETCH_CHANGED_CHECKED = 'FETCH-CHANGED-CHECKED';
export const FETCH_EDITED_PRAYER_TITLE = 'FETCH-EDITED-PRAYER-TITLE';
export const TOGGLE_SHOW_CHECKED = 'TOGGLE-SHOW-CHECKED';
export const FETCH_DELETED_PRAYER = 'FETCH-DELETED-PRAYER';
export const SET_COMMENT_ID = 'SET-COMMENT-ID';
const initialState = {
  isShowCheckedPrayers: true,
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
      prayers: [...state.prayers, action.payload.newPrayer],
    };
  },
  [FETCH_CHANGED_CHECKED]: (state, action) => {
    return {
      ...state,
      prayers: state.prayers.map((prayer) => {
        if (prayer.id === action.payload.prayerId) {
          return {
            ...prayer,
            checked: action.payload.checked,
          };
        } else {
          return prayer;
        }
      }),
    };
  },
  [FETCH_DELETED_PRAYER]: (state, action) => {
    return {
      ...state,
      prayers: state.prayers.filter(
        (prayer) => prayer.id !== action.payload.prayerId,
      ),
    };
  },
  [TOGGLE_SHOW_CHECKED]: (state) => {
    return {
      ...state,
      isShowCheckedPrayers: state.isShowCheckedPrayers ? false : true,
    };
  },
  [FETCH_EDITED_PRAYER_TITLE]: (state, action) => {
    return {
      ...state,
      prayers: state.prayers.map((prayer) => {
        if (prayer.id === action.payload.prayerId) {
          return {
            ...prayer,
            title: action.payload.title,
          };
        } else {
          return prayer;
        }
      }),
    };
  },
  [SET_COMMENT_ID]: (state, action) => {
    return {
      ...state,
      prayers: state.prayers.map((prayer) => {
        if (prayer.id === action.payload.prayerId) {
          return {
            ...prayer,
            commentsIds: [action.payload.commentId, ...prayer.commentsIds],
          };
        } else {
          return prayer;
        }
      }),
    };
  },
};

export default function prayersReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
