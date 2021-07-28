import api from "../api/api";
import { GET_ALL_USERS, UPDATE_USER, DELETE_USER } from "../api/apiEndPoint";
import "react-toastify/dist/ReactToastify.css";

//v1/login/

export const getAllUser = () => async (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true));
    api
      .get(GET_ALL_USERS)
      .then((response, error) => {
        dispatch(getAllUserList(response));
        dispatch(setLoading(false));
        resolve(response);
      })
      .catch((error) => {
        dispatch(setLoading(false));
        reject(error);
      });
  });
};

export const updateUser = (data) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true));
    api
      .put(UPDATE_USER, data)
      .then((response, error) => {
        // dispatch(updateUserData(response));
        dispatch(updateStatus(true));
        setTimeout(() => {
          dispatch(updateStatus(false));
        }, 1000);
        resolve(response);
      })
      .catch((error) => {
        dispatch(setLoading(false));
        reject(error);
      });
  });
};

export const deleteUser = (data) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true));
    api
      .post(DELETE_USER, data)
      .then((response, error) => {
        // dispatch(getAllUserList(response));
        // dispatch(setLoading(false));
        resolve(response);
      })
      .catch((error) => {
        dispatch(setLoading(false));
        reject(error);
      });
  });
};

export function setLoading(status) {
  return {
    status,
    type: "SET_LOADING",
  };
}

export function getAllUserList(payload) {
  return {
    type: "ALL_USER_DATA",
    allUserData: payload,
  };
}

export function updateUserData(payload) {
  return {
    type: "UPDATE_USER",
    saveUserName: payload,
  };
}

export function updateStatus(payload) {
  return {
    type: "UPDATE_STATUS",
    updateStatus: payload,
  };
}



