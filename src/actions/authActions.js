import { ON_CHANGE_AUTH, FETCH_PROFILE_DATA } from '../reducers/authReducer';
import { Alert } from 'react-native';
// import ApiService from '../utils/ApiService';
import { submitRegistData, submitLogInData } from '../api/api';
import { setTokenToStore } from '../utils/utils';

export const fetchProfileData = (profileData) => {
  return {
    type: FETCH_PROFILE_DATA,
    payload: { profileData },
  };
};

export const toggleIsAuth = () => {
  return {
    type: ON_CHANGE_AUTH,
  };
};

export const submitRegistration = (registData) => {
  return (dispatch) => {
    submitRegistData(registData).then(({ data }) => {
      if (data.token) {
        setTokenToStore(data.token);
        dispatch(fetchProfileData(data));
        dispatch(toggleIsAuth());
      } else {
        Alert.alert('Что-то пошло не так!');
      }
    });
  };
};

export const submitLogIn = (logInData) => {
  return (dispatch) => {
    submitLogInData(logInData).then(({ data }) => {
      if (data.token) {
        setTokenToStore(data.token);
        dispatch(fetchProfileData(data));
        dispatch(toggleIsAuth());
      } else {
        Alert.alert('Не верный логин или пароль!');
      }
    });
  };
};
