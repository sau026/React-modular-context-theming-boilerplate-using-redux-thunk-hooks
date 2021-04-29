import api from "../api/api";
import { GET_ALL_USERS } from "../api/apiEndPoint";

//v1/login/

export const getAllUser = (data) => async (dispatch) => {
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

