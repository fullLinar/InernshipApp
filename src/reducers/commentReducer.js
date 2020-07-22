const initialState = {};

const actionMap = {};

export default function commentReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
