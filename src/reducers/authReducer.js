export const ON_CHANGE_AUTH = 'ON-CHANGE-AUTH';

const initialState = {
  isAuth: false,
};

const actionMap = {
  [ON_CHANGE_AUTH]: (state, action) => {
    console.log('action');
    return {
      ...state,
      isAuth: state.isAuth ? false : true,
    };
  },
};

export default function authReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
