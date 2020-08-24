import AsyncStorage from '@react-native-community/async-storage';

export const retrieveToken = async () => {
  try {
    let token = await AsyncStorage.getItem('token');
    return token;
  } catch (err) {
    console.log(err);
  }
};

export const setTokenToStore = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (err) {
    console.log(err);
  }
};

export const colorGenerator = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const validateRequiredField = (value) => {
  if (!value || value === '') {
    return 'Заполните поле!';
  } else {
    return undefined;
  }
};

export const validateEmail = (value) => {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(value) === false) {
    return 'Введите корректный e-mail';
  } else {
    return undefined;
  }
};

export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
