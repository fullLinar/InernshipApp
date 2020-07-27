export const FETCH_COLUMNS = 'FETCH-COLUMNS';
export const ON_CHAGE_IS_FETCHING = 'ON-CHANGE-IS-FETCHING';

const initialState = {
  isFetching: false,
  columns: [],
};
const actionMap = {
  [ON_CHAGE_IS_FETCHING]: (state, action) => {
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
};

export default function deskReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
