import { combineReducers } from "redux";
import userNameDataReduced from './checkUsernameReducer';
import allUserData from './curdOperationReducer'

export default combineReducers({
  userNameDataReduced,
  allUserData
});
