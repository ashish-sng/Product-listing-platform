import React, { useState } from "react";
import "./SignupForm.css";
import mail from "../../../assets/icons/mail.png";
import user from "../../../assets/icons/user.png";
import passwordImg from "../../../assets/icons/passwordImg.png";
import mobileImg from "../../../assets/icons/mobileImg.png";
import axios from "axios";
import useProductContext from "../../../hooks/useProductContext";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const { setLoggedIn, setSignupPopup, setPopup } = useProductContext();
  const navigate = useNavigate();

  const redirectLogin = () => {
    setSignupPopup(false);
  };

  const onClose = () => {
    setPopup(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      mobile,
      name,
    };

    try {
      const response = await axios.post("http://localhost:4000/register", data);
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      setLoggedIn(true);
      setEmail("");
      setPassword("");
      setMobile("");
      setName("");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.log(err);
    }
    onClose();
  };

  return (
    <div>
      <form className="signup__form">
        <div className="signup__form__name__input">
          <img src={user} alt="user" />
          <input
            value={name}
            onChange={handleNameChange}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="signup__form__email__input">
          <img src={mail} alt="mail" />
          <input
            value={email}
            onChange={handleMailChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="signup__form__mobile__input">
          <img src={mobileImg} alt="mobile" />
          <input
            value={mobile}
            onChange={handleMobileChange}
            type="number"
            placeholder="Mobile"
          />
        </div>
        <div className="signup__form__password__input">
          <img src={passwordImg} alt="password" />
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="signup__form__footer">
          <span>Already have an account?</span>
          <u onClick={redirectLogin}>Login</u>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="form__signup__button"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
