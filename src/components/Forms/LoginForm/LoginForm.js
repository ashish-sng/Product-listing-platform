import React, { useState } from "react";
import "./LoginForm.css";
import mail from "../../../assets/icons/mail.png";
import passwordImg from "../../../assets/icons/passwordImg.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useProductContext from "../../../hooks/useProductContext";
import BASEURL from "../../../constants/base";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setPopup, setLoggedIn } = useProductContext();

  const handlePassowrdChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await axios.post(`${BASEURL}/login`, data);
      localStorage.setItem("token", response.data.token);
      toast.success("Login Successful", {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        setPopup(false);
        setLoggedIn(true);
        navigate("/");
      }, 2000);
    } catch (err) {
      if (err.response.status === 401) {
        toast.error("Invalid Credentials", {
          position: "top-center",
          autoClose: 2000,
        });
        return;
      } else {
        toast.error("Something went wrong");
        return;
      }
    }
  };

  const { redirectSignup } = props;

  return (
    <div onClick={() => {}}>
      <form className="login__form">
        <div className="login__form__email__input">
          <img src={mail} alt="mail" />
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="login__form__password__input">
          <img src={passwordImg} alt="password" />
          <input
            value={password}
            onChange={handlePassowrdChange}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="login__form__footer">
          <span>Don't have an account?</span>
          <u onClick={redirectSignup}>Sign up</u>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="form__login__button"
        >
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
