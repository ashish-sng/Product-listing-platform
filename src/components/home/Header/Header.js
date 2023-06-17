import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onHeaderLogin = () => {
    navigate("/login");
  };

  const onHeaderSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="header">
      <span>Feedback</span>
      <div className="header__buttons">
        <button className="header__login__button" onClick={onHeaderLogin}>
          Login
        </button>
        <button className="header__signup__button" onClick={onHeaderSignup}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Header;
