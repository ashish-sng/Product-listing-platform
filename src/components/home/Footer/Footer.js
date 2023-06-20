import React, { useEffect, useState } from "react";
import "./Footer.css";
import ProductCard from "./ProductCard/ProductCard";
import Filter from "./CategoryFilter/Filter";
import SearchBar from "./SearchBar/SearchBar";
import useProductContext from "../../../hooks/useProductContext";
import SignupPopup from "../../popups/Signup/SignupPopup";
import LoginPopup from "../../popups/Login/LoginPopup";
import AddProductPopup from "../../popups/AddProduct/AddProductPopup";
import axios from "axios";

const Footer = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const {
    products,
    setProducts,
    popup,
    setPopup,
    signupPopup,
    loggedIn,
    selected,
    setCategory,
    selectedCategory,
    category,
  } = useProductContext();

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("signup__popup__overlay")) {
      setPopup(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, [selected, products, selectedCategory]);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products", {
        params: {
          sortBy: selected,
          category: selectedCategory.join(","),
        },
      });
      setProducts(response.data);
      if (category.length === 0) {
        uniqueCategories(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uniqueCategories = (products) => {
    const categories = [];
    products.forEach((product) => {
      product.category.forEach((category) => {
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });
    });
    // return categories;
    setCategory(categories);
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <Filter />
      </div>
      <div className="footer__right">
        <SearchBar />
        {innerWidth < 500 && <Filter />}

        {products.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          products.map((product) => (
            <ProductCard key={product._id} data={product} />
          ))
        )}
      </div>

      {popup && (
        <div className="signup__popup__overlay" onClick={handleOverlayClick}>
          {loggedIn ? (
            <AddProductPopup />
          ) : signupPopup ? (
            <SignupPopup />
          ) : (
            <LoginPopup />
          )}
        </div>
      )}
    </div>
  );
};

export default Footer;
