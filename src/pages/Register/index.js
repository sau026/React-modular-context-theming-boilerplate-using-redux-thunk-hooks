import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../../redux/actions/checkUsernameAction";
import InputPrimary from "../../components/Input";
import ButtonPrimary from "../../components/Button";
import "./index.scss";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPass, setUserPass] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);

  const checkValid = () => {
    if (userName && userPass && confirmPass && userEmail) {
      if (userPass !== confirmPass) {
        return true;
      }
      return false;
    }
    return true;
  };

  const getRegistered = async () => {
    const obj = {
      username: userName,
      email: userEmail,
      password: userPass,
    };
    const registerRes = await dispatch(registerUser(obj, history));
    console.log("saurabh get register res:::::::::::", registerRes);
    if (registerRes.code == 200) {
      toast("Registered, Please Login !");
      setTimeout(() => {
        history.push("/login");
      }, 1000);
    }
  };

  return (
    <div className="register__container">
      <div className="form__control">
        <label>Username</label>
        <InputPrimary
          type="text"
          name="username"
          placeholder="Enter your username"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="form__control">
        <label>Email</label>
        <InputPrimary
          type="text"
          name="email"
          placeholder="Enter your username"
          onChange={(e) => setUserEmail(e.target.value)}
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
        />
      </div>
      <div className="form__control">
        <label>Confirm Password</label>
        <InputPrimary
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password once more"
          onChange={(e) => setConfirmPass(e.target.value)}
        />
      </div>
      <div className="form__control">
        <ButtonPrimary
          disabled={checkValid()}
          label="Register"
          onClick={getRegistered}
        />
      </div>
      <span className="already_account">
        Already have account?
        <Link to="/login" className="signin__link">
          &nbsp;Sign In
        </Link>
      </span>
      <ToastContainer className="toast-container" position="bottom-right" />
    </div>
  );
};

export default Register;
