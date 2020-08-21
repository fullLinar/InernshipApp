import { ON_CHANGE_AUTH, FETCH_PROFILE_DATA } from '../reducers/authReducer';
import { Alert } from 'react-native';
import ApiService from '../utils/ApiService';
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

//-----------------------Thunks--------------------------

export const submitRegistration = (registData) => {
  return async (dispatch) => {
    const { data } = await ApiService.submitRegistData(registData);
    if (data.token) {
      setTokenToStore(data.token);
      dispatch(fetchProfileData(data));
      dispatch(toggleIsAuth());
    } else {
      Alert.alert('Что-то пошло не так!');
    }
  };
};

export const submitLogIn = (logInData) => {
  return async (dispatch) => {
    const { data } = await ApiService.submitLogInData(logInData);
    if (data.token) {
      setTokenToStore(data.token);
      dispatch(fetchProfileData(data));
      dispatch(toggleIsAuth());
    } else {
      Alert.alert('Не верный логин или пароль!');
    }
  };
};
