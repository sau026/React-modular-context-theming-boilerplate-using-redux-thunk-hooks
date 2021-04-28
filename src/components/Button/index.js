import React from "react";
import "./index.scss";

const ButtonPrimary = (props) => {
  return (
    <>
      <button className={props.disabled ? 'btn__disabled' : ''} {...props}>{props.label}</button>
    </>
  );
};

export default ButtonPrimary;
