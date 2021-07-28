import React from "react";
import "react-toastify/dist/ReactToastify.css";
import ButtonPrimary from "../Button";
import "./index.scss";

const CustomAlert = (props:any) => {  
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
