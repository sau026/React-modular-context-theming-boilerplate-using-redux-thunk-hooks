import { combineReducers } from "redux";
import userNameDataReduced from './checkUsernameReducer';
import allFeedbackData from './feedbackReducer'
import allUserData from './curdOperationReducer'

export default combineReducers({
  userNameDataReduced,
  allUserData,
  allFeedbackData
});
