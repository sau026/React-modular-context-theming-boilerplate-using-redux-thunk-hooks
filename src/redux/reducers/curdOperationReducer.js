const initialState = {
  allUserData: {},
  isLoading: false,
};
;
const allUserData = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_USER_DATA":
      return { ...state, allUserData: action.allUserData };
    case "SET_LOADING":
      return { ...state, isLoading: action.status };
    default:
      return state;
  }
};

export default allUserData;
