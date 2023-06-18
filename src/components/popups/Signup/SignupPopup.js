import React from "react";
import "./SignupPopup.css";
import SignupForm from "../../Forms/SignupForm/SignupForm";
import PopupBanner from "../PopupBanner/PopupBanner";

const Signup = ({ setSignupPopup }) => {
  return (
    <div className="popup__signup">
      <SignupForm setSignupPopup={setSignupPopup} />
      <PopupBanner />
    </div>
  );
};

export default Signup;
