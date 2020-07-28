export const getAuth = (state) => {
  return state.authData.isAuth;
};

export const getRegistData = (state) => {
  return {
    name: state.authData.name,
    email: state.authData.email,
    password: state.authData.password,
  };
};

export const getLogInData = (state) => {
  return {
    email: state.authData.email,
    password: state.authData.password,
  };
};

export const getToken = (state) => {
  return state.authData.profileData.token;
};

export const getColumnsList = (state) => {
  return state.columnsData.columns;
};

export const getIsFetching = (state) => {
  return state.columnsData.isFetching;
};

export const getIsAddInput = (state) => {
  return state.columnsData.isAddInput;
};
