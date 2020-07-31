import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const axiosInstance = axios.create({
  baseURL: 'https://trello-purrweb.herokuapp.com/',
});

export const submitRegistData = (registData) => {
  return axios.post(
    'https://trello-purrweb.herokuapp.com/auth/sign-up',
    registData,
  );
};

export const submitLogInData = (logInData) => {
  return axios.post(
    'https://trello-purrweb.herokuapp.com/auth/sign-in',
    logInData,
  );
};

export const getColumnsFromAPI = (token) => {
  return axiosInstance.get('columns', {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  });
};

export const setColumn = (columnData, token) => {
  return axiosInstance.post('columns', columnData, {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  });
};

export const getPrayersFromAPI = (token) => {
  return axiosInstance.get('cards', {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  });
};

export const setPrayer = (prayerData, token) => {
  return axiosInstance.post('cards', prayerData, {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  });
};
