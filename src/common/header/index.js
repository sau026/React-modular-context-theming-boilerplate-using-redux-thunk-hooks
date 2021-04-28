import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Wrapper from "../../layouts/Wrapper";
import ThemeContext from "../../context/themeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";

const Sidebar = () => {
  const history = useHistory();
  const { dark, toggle } = useContext(ThemeContext);

  const logout = () => {
    localStorage.removeItem("token");
    toast("Sucessfully logged out!");
    history.push("/home");
  };

  return (
    <div className="header__container">
      <Wrapper>
        <div className="header">
          <div>
            <span>Logo Text</span>
          </div>
          <div className="menu">
            <i className="fas fa-home icon"></i>
            <i className="fab fa-instagram-square icon"></i>
            <i className="fas fa-bars icon"></i>
            <i className="fas fa-calendar-week icon"></i>
            <i className="far fa-comment icon"></i>
            <i className="far fa-clock icon"></i>
            <div onClick={() => toggle()} stopPropagation>
              <span title="switch theme" style={{ cursor: "pointer" }}>
                {!dark ? "🌙 Night" : "☀️ Day"}
              </span>
            </div>
            <div className="user__menu">
              <i className="far fa-user icon"></i>
              <div className="profile__popup" onClick={logout}>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <ToastContainer className="toast-container" position="bottom-right" />
    </div>
  );
};

export default Sidebar;
