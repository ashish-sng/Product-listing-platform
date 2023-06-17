import React from "react";
import "./Footer.css";
import ProductCard from "./ProductCard/ProductCard";
import Filter from "./CategoryFilter/Filter";

const Footer = ({ dummyData }) => {
  console.log(dummyData);
  return (
    <div className="footer">
      <div className="footer__left">
        <Filter />
      </div>
      <div className="footer__right">
        {dummyData.map((data) => (
          <ProductCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
