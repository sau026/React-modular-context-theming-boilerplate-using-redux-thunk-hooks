import { combineReducers } from "redux";
import userNameDataReduced from './checkUsernameReducer';
import allUserData from './curdOperationReducer'

export const rootReducer = combineReducers({
  userNameDataReduced,
  allUserData
});

export type RootState = ReturnType<typeof rootReducer>