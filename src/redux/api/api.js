import axios from 'axios';
import BASE_URL from '../api/apiEndPoint';
import axiosApiInstance from '../../config/httpInterceptor'

let api = {};
// var BASE_URL = 'https://infivizdev.infilect.com/api';

api.get = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosApiInstance.get(`${BASE_URL}${url}`);
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
}

api.post = async (url, parameters) => {
  return new Promise(async (resolve, reject) => {
    axiosApiInstance
      .post(`${BASE_URL}${url}`, parameters)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error.response);
      });
  });
};

api.put = async (url, parameters) => {
  return new Promise(async (resolve, reject) => {
    axiosApiInstance
      .put(`${BASE_URL}${url}`, parameters)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error.response);
      });
  });
};

api.delete = (url) => {
  return new Promise(async (resolve, reject) => {
    axiosApiInstance
      .delete(`${BASE_URL}${url}`)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error.response);
      });
  });
};

export default api;
