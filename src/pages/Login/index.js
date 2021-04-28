import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkUserName } from "../../redux/actions/checkUsernameAction";
import InputPrimary from "../../components/Input";
import ButtonPrimary from "../../components/Button";
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
        <label>Username</label>
        <InputPrimary
          type="text"
          name="email"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="form__control">
        <label>Password</label>
        <InputPrimary
          id="password"
          type="password"
          name="password"
          onChange={(e) => setUserPass(e.target.value)}
        />
      </div>
      <div className="form__control">
        <ButtonPrimary disabled={checkValid()} label="Login" onClick={getLogin} />
      </div>
    </div>
  );
};

export default Login;
