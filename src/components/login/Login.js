import React from "react";
import "./Login.css";
import LoginForm from "../Forms/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="main__login">
      <div className="main__login__header">
        <h1>Feedback</h1>
        <h3>Add your products and give us your valuable feedback</h3>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
