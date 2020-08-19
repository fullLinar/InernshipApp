import axios from 'axios';

class ApiService {
  axiosInstance = axios.create({
    baseURL: 'https://trello-purrweb.herokuapp.com/',
  });

  submitRegistData = (registData) => {
    return axios.post(
      'https://trello-purrweb.herokuapp.com/auth/sign-up',
      registData,
    );
  };

  submitLogInData = (logInData) => {
    return axios.post(
      'https://trello-purrweb.herokuapp.com/auth/sign-in',
      logInData,
    );
  };

  getColumnsFromAPI = (token) => {
    return this.axiosInstance.get('columns', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
  };

  setColumn = (columnData, token) => {
    return this.axiosInstance.post('columns', columnData, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
  };

  deleteColumn = (colId, token) => {
    return this.axiosInstance.delete(`columns/${colId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
  };

  editColumnData = (columnData, colId, token) => {
    return this.axiosInstance.put(`columns/${colId}`, columnData, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
  };

  getPrayersFromAPI = (token) => {
    return this.axiosInstance.get('cards', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
  };

  setPrayer = (prayerData, token) => {
    return this.axiosInstance.post('cards', prayerData, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
  };

  toggleCheckedPrayer = (prayerData, prayerId, token) => {
    return this.axiosInstance.put(`cards/${prayerId}`, prayerData, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
  };

  editPrayerTitle = (prayerData, prayerId, token) => {
    return this.axiosInstance.put(`cards/${prayerId}`, prayerData, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
  };

  deletePrayer = (prayerId, token) => {
    return this.axiosInstance.delete(`cards/${prayerId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
  };

  getComments = (token) => {
    return this.axiosInstance.get('comments', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
  };

  setComment = (commentData, prayerId, token) => {
    return this.axiosInstance.post(`cards/${prayerId}/comments`, commentData, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
  };

  editComment = (commentData, commentId, token) => {
    return this.axiosInstance.put(`comments/${commentId}`, commentData, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
  };

  deleteComment = (commentId, token) => {
    return this.axiosInstance.delete(`comments/${commentId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
  };
}

export default new ApiService();
