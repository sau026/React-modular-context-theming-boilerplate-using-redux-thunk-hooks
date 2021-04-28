const initialState = {
    feedbackData: {},
    submitFeedbackData: null,
    isLoading: false,
  };
  
  const allFeedbackData = (state = initialState, action) => {
    switch (action.type) {
      case 'FEEDBACK_DATA':
        return { ...state, feedbackData: action.feedbackData };
      case 'SUBMIT_FEEDBACK_DATA':
          return { ...state, submitFeedbackData: action.submitFeedbackData };
      case 'SET_LOADING':
        return { ...state, isLoading: action.status };
      default:
        return state;
    }
  };
  
  export default allFeedbackData;
  