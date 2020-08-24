import axios from 'axios';
import { retrieveToken } from '../utils';
class ApiService {
  instance = async () => {
    const token = await retrieveToken();

    let headers = {};

    if (token) {
      headers = {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      };
    }

    const instance = axios.create({
      headers,
      baseURL: 'https://trello-purrweb.herokuapp.com/',
    });
    return instance;
  };

  submitRegistData = ({ registData }) => {
    return axios.post(
      'https://trello-purrweb.herokuapp.com/auth/sign-up',
      registData,
    );
  };

  submitLogInData = ({ logInData }) => {
    return axios.post(
      'https://trello-purrweb.herokuapp.com/auth/sign-in',
      logInData,
    );
  };

  getColumns = async () => {
    const axiosInstance = await this.instance();
    return axiosInstance.get('columns');
  };

  setColumn = async ({ columnData }) => {
    const axiosInstance = await this.instance();

    return axiosInstance.post('columns', columnData);
  };

  deleteColumn = async ({ colId }) => {
    const axiosInstance = await this.instance();

    return axiosInstance.delete(`columns/${colId}`);
  };

  editColumnData = async ({ columnData, colId }) => {
    const axiosInstance = await this.instance();

    return axiosInstance.put(`columns/${colId}`, columnData);
  };

  getPrayers = async () => {
    const axiosInstance = await this.instance();

    return axiosInstance.get('cards');
  };

  setPrayer = async ({ prayerData }) => {
    const axiosInstance = await this.instance();

    return axiosInstance.post('cards', prayerData);
  };

  toggleCheckedPrayer = async ({ prayerData, prayerId }) => {
    const axiosInstance = await this.instance();

    return axiosInstance.put(`cards/${prayerId}`, prayerData);
  };

  editPrayerTitle = async ({ prayerData, prayerId }) => {
    const axiosInstance = await this.instance();

    return axiosInstance.put(`cards/${prayerId}`, prayerData);
  };

  deletePrayer = async ({ prayerId }) => {
    const axiosInstance = await this.instance();

    return axiosInstance.delete(`cards/${prayerId}`);
  };

  getComments = async ({ token }) => {
    const axiosInstance = await this.instance();

    return axiosInstance.get('comments');
  };

  setComment = async ({ commentBody, prayerId }) => {
    const axiosInstance = await this.instance();

    return axiosInstance.post(`cards/${prayerId}/comments`, commentBody);
  };

  editComment = async ({ commentBody, commentId }) => {
    const axiosInstance = await this.instance();

    return axiosInstance.put(`comments/${commentId}`, commentBody);
  };

  deleteComment = async ({ commentId }) => {
    const axiosInstance = await this.instance();

    return axiosInstance.delete(`comments/${commentId}`);
  };
}

export default new ApiService();
