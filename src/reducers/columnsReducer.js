export const FETCH_COLUMNS = 'FETCH-COLUMNS';
export const FETCH_COLUMN = 'FETCH-COLUMN';
export const ON_CHAGE_IS_FETCHING = 'ON-CHANGE-IS-FETCHING';
export const TOGGLE_IS_ADD_INPUT = 'TOGGLE-IS-ADD-INPUT';
export const SET_COLUMN_TITLE = 'SET-COLUMN-TITLE';

const initialState = {
  isFetching: false,
  isAddInput: false,
  columnTitle: '',
  columnDescription: '',
  columns: [],
};
const actionMap = {
  [ON_CHAGE_IS_FETCHING]: (state, action) => {
    return {
      ...state,
      isFetching: action.payload.isFetching,
    };
  },
  [SET_COLUMN_TITLE]: (state, action) => {
    return {
      ...state,
      columnTitle: action.payload.titleText,
    };
  },
  [FETCH_COLUMNS]: (state, action) => {
    return {
      ...state,
      columns: action.payload.columns,
    };
  },
  [FETCH_COLUMN]: (state, action) => {
    return {
      ...state,
      columns: [...state.columns, action.payload.column],
    };
  },
  [TOGGLE_IS_ADD_INPUT]: (state) => {
    return {
      ...state,
      isAddInput: state.isAddInput ? false : true,
    };
  },
};

export default function columnsReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
