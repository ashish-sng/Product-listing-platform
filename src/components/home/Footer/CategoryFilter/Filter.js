import React from "react";
import "./Filter.css";
import useProductContext from "../../../../hooks/useProductContext";

const Filter = () => {
  const { category, selectedCategory, setSelectedCategory } =
    useProductContext();

  const handleCategorySelection = (cat) => {
    const singleCategory = cat.target.innerText;
    if (selectedCategory.includes(singleCategory)) {
      setSelectedCategory(
        selectedCategory.filter((cat) => cat !== singleCategory)
      );
    } else {
      setSelectedCategory([...selectedCategory, singleCategory]);
    }
  };

  return (
    <div className="category__filter">
      <div className="filter__banner">
        <span>Feedback</span>
        <span>Apply Filter</span>
      </div>
      <div className="filter__items__list">
        <span
          className={selectedCategory.length === 0 ? "selected" : ""}
          onClick={() => setSelectedCategory([])}
        >
          All
        </span>
        {category.map((category, index) => (
          <span
            key={index}
            onClick={handleCategorySelection}
            className={selectedCategory.includes(category) ? "selected" : ""}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Filter;
