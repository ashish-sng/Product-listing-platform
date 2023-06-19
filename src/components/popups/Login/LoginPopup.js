import React from "react";
import "./LoginPopup.css";
import LoginForm from "../../Forms/LoginForm/LoginForm";
import PopupBanner from "../PopupBanner/PopupBanner";

const LoginPopup = () => {
  return (
    <div className="login__popup">
      <LoginForm />
      <PopupBanner />
    </div>
  );
};

export default LoginPopup;
