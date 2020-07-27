import {
  ON_CHANGE_AUTH,
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  FETCH_PROFILE_DATA,
} from '../reducers/authReducer';

import { submitRegistData, submitLogInData } from '../utils/utils';

export const setName = ({ nameText }) => {
  return {
    type: SET_NAME,
    payload: { nameText },
  };
};

export const setEmail = ({ emailText }) => {
  return {
    type: SET_EMAIL,
    payload: { emailText },
  };
};

export const setPassword = ({ passText }) => {
  return {
    type: SET_PASSWORD,
    payload: { passText },
  };
};

export const fetchProfileData = (profileData) => {
  return {
    type: FETCH_PROFILE_DATA,
    payload: { profileData },
  };
};

export const submitRegistration = (registData) => {
  return (dispatch) => {
    submitRegistData(registData).then((response) => {
      if (response.data.token) {
        dispatch(fetchProfileData(response.data));
        dispatch({ type: ON_CHANGE_AUTH });
      }
    });
  };
};
export const submitLogIn = (logInData) => {
  return (dispatch) => {
    submitLogInData(logInData).then((response) => {
      if (response.data.token) {
        dispatch(fetchProfileData(response.data));
        dispatch({ type: ON_CHANGE_AUTH });
      }
    });
  };
};
