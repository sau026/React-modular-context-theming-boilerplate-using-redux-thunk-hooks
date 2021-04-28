import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getFeedbackData,
  submitFeedbackData,
} from "../../redux/actions/feedbackAction";
import ButtonPrimary from "../primary-button";
import "./index.scss";

const FeedbackModal = (props) => {
  const allFeedbackDetails = useSelector((state) => state.allFeedbackData);
  const userNameDetails = useSelector((state) => state.userNameDataReduced);
  const dispatch = useDispatch();
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [isCloseChecked, setIsCloseChecked] = useState(null);
  const [questionList, setQuestionList] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [count, setCount] = useState(0);

  const questionAnswerObj = useRef({
    //Using ref to persist the value
    username: userNameDetails.saveUserName, //Username coming from redux store
    stopSurvey: true,
    questions: [],
  });

  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(getFeedbackData());
  }, [stableDispatch]);

  useEffect(() => {
      /**
       * Getting question list bsed on emoji reaction
       */
    if (
      selectedEmoji === "Happy" ||
      selectedEmoji === "Slightly Happy" ||
      selectedEmoji === "Don't Care"
    ) {
      const getAllQuestion = allFeedbackDetails.feedbackData.result.filter(
        (ele) => {
          return ele.type === selectedEmoji;
        }
      );
      setQuestionList(getAllQuestion[0].questions);
    }
  }, [selectedEmoji, allFeedbackDetails]);

  const closeFeedbackPopup = () => {
      /**
       * Method to close the popup initially
       */
    const obj = {
      username: userNameDetails.saveUserName,
      stopSurvey: true,
    };
    dispatch(submitFeedbackData(obj));
  };

  const saveFeedbackToDB = () => {
      /**
       * Dispatching an action
       */
    dispatch(submitFeedbackData(questionAnswerObj.current));
  };

  const submitQuestion = () => {
     /**
       * Mutating object to save the feedback into DB
       */
    const currentQnA = questionAnswerObj.current;
    questionAnswerObj.current = {
      username: currentQnA.username,
      stopSurvey: currentQnA.stopSurvey,
      questions: [
        ...currentQnA.questions,
        {
          id: questionList[count]._id,
          answer: feedbackText,
        },
      ],
    };
    if (count < questionList.length - 1) {
      setCount(count + 1);
      setFeedbackText("");
    } else if (count === questionList.length - 1) {
      saveFeedbackToDB();
    }
  };

  const getFeedbackModalJSX = () => {
      /**
       * First box with all three reactions
       */
    return (
      <>
        {allFeedbackDetails.feedbackData.result ? (
          <div>
            <div className="modal-header">
              <h3>Are you happy with our product!!</h3>
            </div>
            <div className="modal-body">
              {allFeedbackDetails.feedbackData.result &&
                allFeedbackDetails.feedbackData.result.map((element, i) => {
                  return (
                    <div
                      className="emoji__box"
                      onClick={() => setSelectedEmoji(element.type)}
                      key={element.type}
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGXft3JFeEtsrwkj7tcVNIiXDkgnHQvjvhwQ&usqp=CAU"
                        alt="emoji"
                      />
                      <span>{element.type}</span>
                    </div>
                  );
                })}
            </div>{" "}
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </>
    );
  };

  const getClosePopupJSX = () => {
      /**
       * JSX for close popup ---------- Checkbox and button 
       */
    return (
      <div className="close__popup">
        {!allFeedbackDetails.submitFeedbackData?.status ? (
          <>
            <div className="chechbox__container">
              <input
                type="checkbox"
                name="close-popup"
                value
                onChange={(e) => setIsCloseChecked(!isCloseChecked)}
                checked={isCloseChecked}
              />
              <span>I do not want to answer this</span>
            </div>
            <div className="submit__btn__box">
              <ButtonPrimary
                btnDisabled={isCloseChecked ? false : true}
                classDisabled={!isCloseChecked ? "btn btn__disabled" : "btn"}
                onBtnClick={() => closeFeedbackPopup()}
                btnLoader={allFeedbackDetails && allFeedbackDetails.isLoading}
                btnText="Submit"
              />
            </div>
          </>
        ) : (
          <h3>Thank You, Response has been submitted sucessfully!</h3>
        )}
      </div>
    );
  };

  const getFeedbackFormJSX = () => {
      /**
       * JSX for feedback input ---------- Textarea and button 
       */
    return (
      <div className="ignore__textarea">
        {!allFeedbackDetails.submitFeedbackData?.status ? (
          <>
            <div className="modal-header">
              {selectedEmoji === `Don't Care` ? (
                <h3>We are sorry we are not very useful to you!!</h3>
              ) : null}
            </div>
            <div className="textarea__container">
              <label>{questionList && questionList[count].question}</label>
              <textarea
                maxLength="200"
                type="text"
                rows="6"
                cols="50"
                placeholder="Enter Username"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
              />
              <span className="max__charac">Maximum 200 character</span>
            </div>
            <div className="submit__btn__box">
              <ButtonPrimary
                btnDisabled={feedbackText ? false : true}
                classDisabled={!feedbackText ? "btn btn__disabled" : "btn"}
                onBtnClick={() => submitQuestion()}
                btnLoader={allFeedbackDetails && allFeedbackDetails.isLoading}
                btnText={questionList?.length - 1 === count ? "Submit" : "Next"}
              />
            </div>
          </>
        ) : (
          <h3>Thank You, Feedback has been submitted sucessfully!</h3>
        )}
      </div>
    );
  };

  return (
    <div>
      <div id="myModal" className="feedback__modal">
        <div className="modal-content">
          {!selectedEmoji ? (
            <button
              className="close__popup__btn"
              onClick={() => setSelectedEmoji("close")} //function to close initial popup
            >
              <i className="fas fa-times icon"></i>
            </button>
          ) : null}
          {!selectedEmoji ? getFeedbackModalJSX() : null}
          {selectedEmoji === "Happy" ||
          selectedEmoji === "Slightly Happy" ||
          selectedEmoji === "Don't Care"
            ? getFeedbackFormJSX()
            : null}
          {selectedEmoji === "close" ? getClosePopupJSX() : null}
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
