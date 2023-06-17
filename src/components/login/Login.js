import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import mail from "../../assets/icons/mail.png";
import password from "../../assets/icons/password.png";

const Login = () => {
  const navigate = useNavigate();

  const redirectSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="main__login">
      <div className="main__login__header">
        <h1>Feedback</h1>
        <h3>Add your products and give us your valuable feedback</h3>
      </div>
      <form className="main__login__form">
        <div className="main__login__form__email__input">
          <img src={mail} alt="mail" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="main__login__form__password__input">
          <img src={password} alt="password" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="main__login__form__footer">
          <span>Don't have an account?</span>
          <u onClick={redirectSignup}>Sign up</u>
        </div>
        <button type="submit" className="main__form__login__button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
