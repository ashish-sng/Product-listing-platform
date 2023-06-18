import React, { useState } from "react";
import "./Footer.css";
import ProductCard from "./ProductCard/ProductCard";
import Filter from "./CategoryFilter/Filter";
import SearchBar from "./SearchBar/SearchBar";
import useProductContext from "../../../hooks/useProductContext";
import SignupPopup from "../../popups/Signup/SignupPopup";
import LoginPopup from "../../popups/Login/LoginPopup";
import AddProductPopup from "../../popups/AddProduct/AddProductPopup";

const Footer = ({ dummyData }) => {
  const { loggedIn } = useProductContext();
  const [popup, setPopup] = useState(false);
  const [signupPopup, setSignupPopup] = useState(loggedIn);
  console.log(dummyData);

  const openPopup = () => {
    setPopup(true);
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <Filter />
      </div>
      <div className="footer__right">
        <SearchBar openPopup={openPopup} />
        {dummyData.map((data, index) => (
          <ProductCard key={index} data={data} />
        ))}
      </div>

      {popup &&
        (loggedIn ? (
          <div className={`signup__popup__overlay`}>
            <AddProductPopup />
          </div>
        ) : signupPopup ? (
          <div className={`signup__popup__overlay`}>
            <SignupPopup setSignupPopup={setSignupPopup} />
          </div>
        ) : (
          <div className={`signup__popup__overlay`}>
            <LoginPopup setSignupPopup={setSignupPopup} />
          </div>
        ))}
    </div>
  );
};

export default Footer;
