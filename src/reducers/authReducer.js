export const ON_CHANGE_AUTH = 'ON-CHANGE-AUTH';
export const SET_NAME = 'SET-NAME';
export const SET_EMAIL = 'SET-EMAIL';
export const SET_PASSWORD = 'SET-PASSWORD';
export const FETCH_PROFILE_DATA = 'SET-PROFILE-DATA';

const initialState = {
  isAuth: false,
  name: '',
  email: '',
  password: '',
  profileData: {},
};

const actionMap = {
  [ON_CHANGE_AUTH]: (state) => {
    return {
      ...state,
      isAuth: state.isAuth ? false : true,
    };
  },
  [SET_NAME]: (state, action) => {
    return {
      ...state,
      name: action.payload.nameText,
    };
  },
  [SET_EMAIL]: (state, action) => {
    return {
      ...state,
      email: action.payload.emailText,
    };
  },
  [SET_PASSWORD]: (state, action) => {
    return {
      ...state,
      password: action.payload.passText,
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
