import React from "react";
import "./SearchBar.css";

const SearchBar = ({ openPopup }) => {
  return (
    <div className="footer__bar">
      <div className="footer__header__left">
        <div className="products__list__length">10 Suggestions</div>
        <div class="custom__select">
          <span>Sort By:</span>
          <select>
            <option value="Upvotes">Upvotes</option>
            <option value="Comments">Comments</option>
          </select>
          <span class="arrow"></span>
        </div>
      </div>
      <button onClick={openPopup}>+Add product</button>
    </div>
  );
};

export default SearchBar;
