import { combineReducers } from "redux";
import userNameDataReduced from './checkUsernameReducer';
import allFeedbackData from './feedbackReducer'

export default combineReducers({
  userNameDataReduced,
  allFeedbackData
});
