import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllUser, updateUser } from "../../redux/actions/crudOperationAction";
import InputPrimary from "../Input";
import ButtonPrimary from "../Button";
import "./index.scss";

const UpdateUser = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const updateStatus = useSelector((state) => state.allUserData.updateStatus);
  const [userName, setUserName] = useState(props.dataToUpdate.username);
  const [userEmail, setUserEmail] = useState(props.dataToUpdate.email);
  const [userPass, setUserPass] = useState(props.dataToUpdate.password);
  const [loader, setLoader] = useState(false);

  const checkValid = () => {
    if (userName && userPass && userEmail) {
      return false;
    }
    return true;
  };

  const updateUserData = async () => {
    setLoader(true);
    const obj = {
      _id: props.dataToUpdate._id,
      username: userName,
      email: userEmail,
      password: userPass,
    };
   const updateResponse = await dispatch(updateUser(obj, props));
   if(updateResponse.code == 200){
    dispatch(getAllUser());
    props.onCancelClick()
    setLoader(true);
    toast("Data Sucessfully Updated!");
   }
  };

  return (
    <div className="update__user">
      <span className="heading">Update user data</span>
      <hr></hr>
      <div className="update__form">
        <div className="form__control">
          <label>Username</label>
          <InputPrimary
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>
        <div className="form__control">
          <label>Email</label>
          <InputPrimary
            type="text"
            name="email"
            placeholder="Enter your username"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
          />
        </div>
        <div className="form__control">
          <label>Password</label>
          <InputPrimary
            id="password"
            type="password"
            name="password"
            placeholder="Enter your username"
            onChange={(e) => setUserPass(e.target.value)}
            value={userPass}
          />
        </div>
        <div className="form__control">
          <ButtonPrimary
            disabled={checkValid()}
            label="Update"
            onClick={updateUserData}
            loader={loader}
          />
           <ButtonPrimary
            label="Cancel"
            className="cancel__btn"
            onClick={props.onCancelClick}
          />
        </div>
      </div>
      <ToastContainer className="toast-container" position="bottom-right" autoClose={5000}/>
    </div>
  );
};

export default UpdateUser;
