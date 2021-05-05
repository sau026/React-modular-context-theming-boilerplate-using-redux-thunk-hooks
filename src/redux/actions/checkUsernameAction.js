import api from "../api/api";
import { LOGIN, REGISTER, UPDATE_USER } from "../api/apiEndPoint";

//v1/login/

export const checkUserName = (data, history) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true));
    api
      .post(LOGIN, data)
      .then((response, error) => {
        localStorage.setItem('token', response.result.jwtToken)
        dispatch(userName(response));
        dispatch(setLoading(false));
        history.push('/home');
        resolve(response);
      })
      .catch((error) => {
        dispatch(setLoading(false));
        reject(error);
      });
  });
};

export const registerUser = (data) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true));
    api
      .post(REGISTER, data)
      .then((response, error) => {
        dispatch(createUser(response));
        dispatch(setLoading(false));
        resolve(response);
      })
      .catch((error) => {
        dispatch(setLoading(false));
        reject(error);
      });
  });
};

export const storeUserName = (data) => async (dispatch) => {
  // dispatch(saveUserName(data));
};

export function setLoading(status) {
  return {
    status,
    type: "SET_LOADING",
  };
}

export function userName(payload) {
  return {
    type: "USER_NAME",
    userNameData: payload,
  };
}

export function createUser(payload) {
  return {
    type: "CREATE_USER",
    saveUserName: payload,
  };
}
