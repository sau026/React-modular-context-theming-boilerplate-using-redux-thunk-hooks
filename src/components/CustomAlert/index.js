import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateUser } from "../../redux/actions/crudOperationAction";
import InputPrimary from "../Input";
import ButtonPrimary from "../Button";
import "./index.scss";

const CustomAlert = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allUserData = useSelector((state) => state.allUserData);

  return (
    <div id="alert__box__main" {...props}>
      <span>Are you sure want to delete this user?</span>
      <div className="form__control">
        <ButtonPrimary label="Confirm" onClick={props.onConfirmClick} />
        <ButtonPrimary
          label="Cancel"
          className="cancel__btn"
          onClick={props.onCancelClick}
        />
      </div>
    </div>
  );
};

export default CustomAlert;
