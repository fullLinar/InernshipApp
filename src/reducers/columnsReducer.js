export const FETCH_COLUMNS = 'FETCH-COLUMNS';
export const FETCH_COLUMN = 'FETCH-COLUMN';
export const FETCH_CHANGED_TITLE = 'FETCH-CHANGED-TITLE';
export const FETCH_DELETED_COLUMN = 'FETCH-DELETED-COLUMN';
export const ON_CHANGE_IS_FETCHING = 'ON-CHANGE-IS-FETCHING';
export const TOGGLE_IS_ADD_INPUT = 'TOGGLE-IS-ADD-INPUT';

const initialState = {
  isFetching: false,
  isAddInput: false,
  columns: [],
};
const actionMap = {
  [ON_CHANGE_IS_FETCHING]: (state, action) => {
    return {
      ...state,
      isFetching: action.payload.isFetching,
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
      columns: [action.payload.column, ...state.columns],
    };
  },
  [FETCH_CHANGED_TITLE]: (state, action) => {
    return {
      ...state,
      columns: state.columns.map((column) => {
        if (column.id === action.payload.colId) {
          return {
            ...column,
            title: action.payload.title,
          };
        } else {
          return column;
        }
      }),
    };
  },
  [FETCH_DELETED_COLUMN]: (state, action) => {
    return {
      ...state,
      columns: state.columns.filter(
        (column) => column.id !== action.payload.colId,
      ),
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
