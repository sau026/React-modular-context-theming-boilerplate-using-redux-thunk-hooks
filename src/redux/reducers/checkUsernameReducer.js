const initialState = {
  userNameData: {},
  saveUserName:null,
  isLoading: false,
};
;
const userNameData = (state = initialState, action) => {
  switch (action.type) {
    case "USER_NAME":
      return { ...state, userNameData: action.userNameData };
    case "SAVE_USER_NAME":
      return { ...state, saveUserName: action.saveUserName };
    case "SET_LOADING":
      return { ...state, isLoading: action.status };
    default:
      return state;
  }
};

export default userNameData;
