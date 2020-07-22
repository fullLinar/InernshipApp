const initialState = {};

const actionMap = {};

export default function todoReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
