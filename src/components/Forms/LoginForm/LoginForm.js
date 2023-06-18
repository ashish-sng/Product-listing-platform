import React from "react";
import "./LoginForm.css";
import mail from "../../../assets/icons/mail.png";
import password from "../../../assets/icons/password.png";

const LoginForm = ({ setSignupPopup }) => {
  const redirectSignup = () => {
    setSignupPopup(true);
  };
  return (
    <div>
      <form className="login__form">
        <div className="login__form__email__input">
          <img src={mail} alt="mail" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="login__form__password__input">
          <img src={password} alt="password" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="login__form__footer">
          <span>Don't have an account?</span>
          <u onClick={redirectSignup}>Sign up</u>
        </div>
        <button type="submit" className="form__login__button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
