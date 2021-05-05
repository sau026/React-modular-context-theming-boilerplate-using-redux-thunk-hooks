import React from "react";
import "./index.scss";

const Loader = (props) => {
  return (
    <>
         <i className="fas fa-spinner fa-spin icon" {...props}></i>
    </>
  );
};

export default Loader;
