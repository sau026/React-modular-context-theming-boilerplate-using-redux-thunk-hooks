import api from '../api/api';
import { FEEDBACK_DATA, SUBMIT_FEEDBACK_DATA } from '../api/apiEndPoint';
//v1/login/

export const getFeedbackData = () => async dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true));
    api
      .get(FEEDBACK_DATA)
      .then((response, error) => {
        dispatch(feedbackData(response));
        dispatch(setLoading(false));
        resolve(response);
      })
      .catch(error => {
        dispatch(setLoading(false));
        reject(error);
      });
  });
};

export const submitFeedbackData = (data) => async dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(setLoading(true));
    api
      .post(SUBMIT_FEEDBACK_DATA, data)
      .then((response, error) => {
        dispatch(submitFeedback(response));
        dispatch(setLoading(false));
        resolve(response);
      })
      .catch(error => {
        dispatch(setLoading(false));
        reject(error);
      });
  });
};



export function setLoading(status) {
  return {
    status,
    type: 'SET_LOADING',
  };
}

export function feedbackData(payload) {
  return {
    type: 'FEEDBACK_DATA',
    feedbackData: payload,
  };
}

export function submitFeedback(payload) {
  console.log('ddddddddddd::11111111111111:::::', payload)
  return {
    type: 'SUBMIT_FEEDBACK_DATA',
    submitFeedbackData: payload,
  };
}
