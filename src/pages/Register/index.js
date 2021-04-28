import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkUserName } from "../../redux/actions/checkUsernameAction";
import InputPrimary from "../../components/Input";
import ButtonPrimary from "../../components/Button";
import "./index.scss";

const Register = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(null);
  const [userPass, setUserPass] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  
  const checkValid = () => {
    if(userName && userPass && confirmPass){
      if(userPass !== confirmPass){
        return true;
      }
      return false;
     
    }
    return true;
  }

  const getLogin = () => {
    const obj = {
      username: userName,
      password: userPass,
    };
    dispatch(checkUserName(obj));
  };

  return (
    <div className="register__container">
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
        <label>Confirm Password</label>
        <InputPrimary
          id="password"
          type="password"
          name="password"
          onChange={(e) => setConfirmPass(e.target.value)}
        />
      </div>
      <div className="form__control">
        <ButtonPrimary disabled={checkValid()} label="Register" onClick={getLogin} />
      </div>
    </div>
  );
};

export default Register;
