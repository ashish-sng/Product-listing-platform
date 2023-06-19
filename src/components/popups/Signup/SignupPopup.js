import React from "react";
import "./SignupPopup.css";
import SignupForm from "../../Forms/SignupForm/SignupForm";
import PopupBanner from "../PopupBanner/PopupBanner";

const Signup = () => {
  return (
    <div className="popup__signup">
      <SignupForm />
      <PopupBanner />
    </div>
  );
};

export default Signup;
