import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  checkUserName,
  storeUserName,
} from "../../redux/actions/checkUsernameAction";
import ButtonPrimary from "../primary-button";
import { useHistory } from "react-router-dom";

import "./index.scss";

const UserModal = (props) => {
  const userNameDetails = useSelector((state) => state.userNameDataReduced);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(null);
  const [userPass, setUserPass] = useState(null);

  const history = useHistory();
  const handleClick = () => history.push("/home");

  const checkFeedbackExist = () => {
    const obj = {
      username: userName,
      password: userPass,
    };
    console.log("saurabh check oje::11:::::::", obj);
    dispatch(checkUserName(obj));
    // handleClick();
    // dispatch(storeUserName(userName));
  };

  const getModalJSX = () => {
    return (
      <div className="modal-content user__textbox">
        <h3>Please enter your username!!</h3>
        <div className="input__container">
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <br></br>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setUserPass(e.target.value)}
          ></input>
        </div>
        <div className="submit__btn__box">
          {console.log(
            "loader::::::::",
            userNameDetails,
            userNameDetails.isLoading
          )}
          <ButtonPrimary
            btnDisabled={userName && userPass ? false : true}
            classDisabled={!userName && !userPass ? "btn btn__disabled" : "btn"}
            onBtnClick={() => checkFeedbackExist()}
            btnText="Submit"
            btnLoader={userNameDetails && userNameDetails.isLoading}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div id="myModal" className="username__modal">
        {getModalJSX()}
      </div>
    </div>
  );
};

export default UserModal;
