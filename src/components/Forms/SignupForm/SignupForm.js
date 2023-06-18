import React from "react";
import "./SignupForm.css";
import mail from "../../../assets/icons/mail.png";
import user from "../../../assets/icons/user.png";
import password from "../../../assets/icons/password.png";
import mobile from "../../../assets/icons/mobile.png";

const SignupForm = ({ setSignupPopup }) => {
  const redirectLogin = () => {
    setSignupPopup(false);
  };
  return (
    <div>
      <form className="signup__form">
        <div className="signup__form__name__input">
          <img src={user} alt="user" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="signup__form__email__input">
          <img src={mail} alt="mail" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="signup__form__mobile__input">
          <img src={mobile} alt="mobile" />
          <input type="number" placeholder="Mobile" />
        </div>
        <div className="signup__form__password__input">
          <img src={password} alt="password" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="signup__form__footer">
          <span>Already have an account?</span>
          <u onClick={redirectLogin}>Login</u>
        </div>
        <button type="submit" className="form__signup__button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
