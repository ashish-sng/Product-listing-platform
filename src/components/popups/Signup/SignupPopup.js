import React from "react";
import "./SignupPopup.css";
import SignupForm from "../../Forms/SignupForm/SignupForm";
import PopupBanner from "../PopupBanner/PopupBanner";
import useProductContext from "../../../hooks/useProductContext";

const Signup = () => {
  const { setSignupPopup } = useProductContext();

  return (
    <div className="popup__signup">
      <SignupForm
        redirectLogin={() => {
          setSignupPopup(false);
        }}
      />
      <PopupBanner />
    </div>
  );
};

export default Signup;
