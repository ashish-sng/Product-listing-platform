import React from "react";
import "./LoginPopup.css";
import LoginForm from "../../Forms/LoginForm/LoginForm";
import PopupBanner from "../PopupBanner/PopupBanner";

const LoginPopup = ({ setSignupPopup }) => {
  return (
    <div className="login__popup">
      <LoginForm setSignupPopup={setSignupPopup} />
      <PopupBanner />
    </div>
  );
};

export default LoginPopup;
