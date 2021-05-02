import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { checkUserName } from "../../redux/actions/checkUsernameAction";
import InputPrimary from "../../components/Input";
import ButtonPrimary from "../../components/Button";
import CONSTANT from "../../assets/constant/constant"
import "./index.scss";

const Login = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(null);
  const [userPass, setUserPass] = useState(null);

  const getLogin = () => {
    const obj = {
      username: userName,
      password: userPass,
    };
    dispatch(checkUserName(obj, history));
  };

  const checkValid = () => {
    if(userName && userPass){
      return false;
    }
    return true;
  }

  return (
    <div className="login__container">
      <div className="form__control">
        <label>{CONSTANT.USERNAME}</label>
        <InputPrimary
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setUserName(e.target.value)}
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
        <ButtonPrimary disabled={checkValid()} label={CONSTANT.LOGIN} onClick={getLogin} />
      </div>
      <span className="not_reg">Not registered yet?<Link to="/register" className="signUp__link">&nbsp;Sign Up</Link></span>
    </div>
  );
};

export default Login;
