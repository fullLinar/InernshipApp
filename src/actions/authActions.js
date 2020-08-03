import {
  ON_CHANGE_AUTH,
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  FETCH_PROFILE_DATA,
} from '../reducers/authReducer';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import { submitRegistData, submitLogInData } from '../api/api';

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

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (err) {
    console.log(err);
  }
};

export const submitRegistration = (registData) => {
  return (dispatch) => {
    submitRegistData(registData).then(({ data }) => {
      if (data.token) {
        storeToken(data.token);
        dispatch(fetchProfileData(data));
        dispatch({ type: ON_CHANGE_AUTH });
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
        storeToken(data.token);
        dispatch(fetchProfileData(data));
        dispatch({ type: ON_CHANGE_AUTH });
      } else {
        Alert.alert('Не верный логин или пароль!');
      }
    });
  };
};
