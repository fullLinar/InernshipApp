export const ON_CHANGE_AUTH = 'ON-CHANGE-AUTH';
export const FETCH_PROFILE_DATA = 'SET-PROFILE-DATA';

const initialState = {
  isAuth: false,
  profileData: {},
};

const actionMap = {
  [ON_CHANGE_AUTH]: (state) => {
    return {
      ...state,
      isAuth: state.isAuth ? false : true,
    };
  },
  [FETCH_PROFILE_DATA]: (state, action) => {
    return {
      ...state,
      profileData: action.payload.profileData,
    };
  },
};

export default function authReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
