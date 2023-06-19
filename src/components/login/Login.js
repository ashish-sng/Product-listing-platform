import React from "react";
import "./Login.css";
import LoginForm from "../Forms/LoginForm/LoginForm";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="main__login">
      <div className="main__login__header">
        <h1>Feedback</h1>
        <h3>Add your products and give us your valuable feedback</h3>
      </div>
      {/* {signupPopup ? <SignupForm/> : <LoginForm/>} */}
      <LoginForm redirectSignup={() => {
        navigate("/signup")
      }} />
    </div>
  );
};

export default Login;
