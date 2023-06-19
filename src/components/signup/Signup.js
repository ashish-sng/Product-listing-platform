import React from "react";
import "./Signup.css";
import SignupForm from "../Forms/SignupForm/SignupForm";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="main__signup">
      <div className="main__signup__header">
        <h1>Feedback</h1>
        <h3>Add your products and give us your valuable feedback</h3>
      </div>
      <SignupForm redirectLogin={() => {
        navigate("/login");
      } } />
    </div>
  );
};

export default Signup;
