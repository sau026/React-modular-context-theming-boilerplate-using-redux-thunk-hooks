import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../../redux/actions/checkUsernameAction";
import InputPrimary from "../../components/Input";
import ButtonPrimary from "../../components/Button";
import CONSTANT from "../../assets/constant/constant";
import "./index.scss";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPass, setUserPass] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [loader, setLoader] = useState(false);

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
    setLoader(true);
    const obj = {
      username: userName,
      email: userEmail,
      password: userPass,
    };
    const registerRes = await dispatch(registerUser(obj));
    if(registerRes.code === 200) {
      // toast("Registered, Please Login !");
      history.push("/login");
    }
  };

  return (
    <div className="register__container">
      <div className="form__control">
        <label>{CONSTANT.USERNAME}</label>
        <InputPrimary
          type="text"
          name="username"
          placeholder="Enter your username"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="form__control">
        <label>{CONSTANT.EMAIL}</label>
        <InputPrimary
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <div className="form__control">
        <label>{CONSTANT.PASSWORD}</label>
        <InputPrimary
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => setUserPass(e.target.value)}
        />
      </div>
      <div className="form__control">
        <label>{CONSTANT.CONFIRM_PASSWORD}</label>
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
          label={CONSTANT.REGISTER}
          onClick={getRegistered}
          loader={loader}
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
