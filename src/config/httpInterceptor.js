import axios from "axios";
import { handleLogout } from "../helper/helper";
const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    request.headers["x-access-token"] = token ? token : "";
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.data.code) {
      handleLogout();
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
