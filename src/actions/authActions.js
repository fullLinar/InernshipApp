import { ON_CHANGE_AUTH, FETCH_PROFILE_DATA } from '../reducers/authReducer';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import { submitRegistData, submitLogInData } from '../api/api';

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

export const toggleIsAuth = () => {
  return {
    type: ON_CHANGE_AUTH,
  };
};

export const submitRegistration = (registData) => {
  return (dispatch) => {
    submitRegistData(registData).then(({ data }) => {
      if (data.token) {
        storeToken(data.token);
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
        storeToken(data.token);
        dispatch(fetchProfileData(data));
        dispatch(toggleIsAuth());
      } else {
        Alert.alert('Не верный логин или пароль!');
      }
    });
  };
};
