import React from "react";
import "./Filter.css";

const Filter = () => {
  const productcategory = [
    "All",
    "fintech",
    "healthcare",
    "education",
    "ecommerce",
  ];
  return (
    <div className="category__filter">
      <div className="filter__banner">
        <span>Feedback</span>
        <span>Apply Filter</span>
      </div>
      <div className="filter__items__list">
        {productcategory.map((category) => (
          <span>{category}</span>
        ))}
      </div>
    </div>
  );
};

export default Filter;
