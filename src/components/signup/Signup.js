import React from "react";
import "./Signup.css";
import SignupForm from "../Forms/SignupForm/SignupForm";

const Signup = () => {
  return (
    <div className="main__signup">
      <div className="main__signup__header">
        <h1>Feedback</h1>
        <h3>Add your products and give us your valuable feedback</h3>
      </div>
      <SignupForm />
    </div>
  );
};

export default Signup;
