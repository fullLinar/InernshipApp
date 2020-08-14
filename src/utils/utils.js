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
