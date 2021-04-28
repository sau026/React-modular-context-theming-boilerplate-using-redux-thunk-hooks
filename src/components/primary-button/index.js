import React from "react";
import "./index.scss";

const ButtonPrimary = (props) => {
  return (
      <button disabled={props.btnDisabled} className={props.classDisabled} onClick={props.onBtnClick}>
         { /**  
       * Custom common button for whole app
       */ }
        {props && props.btnText ? props.btnText : 'Submit'}
        {props && props.btnLoader ? <div className="icon"><i className="fas fa-spinner fa-spin"></i></div> : null}
      </button>
  );
};

export default ButtonPrimary;
