import React from "react";
import Loader from "../Loader";
import "./index.scss";

const ButtonPrimary = (props:any) => {
  return (
    <>
      <button className={props.disabled ? "btn__disabled" : ""} {...props}>
        {props.label}
        {props.loader ? <Loader /> : null}
      </button>
    </>
  );
};

export default ButtonPrimary;
