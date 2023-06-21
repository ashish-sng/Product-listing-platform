import React from "react";
import "./SearchBar.css";
import useProductContext from "../../../../hooks/useProductContext";

const SearchBar = () => {
  const {
    setPopup,
    selected,
    setSelected,
    products,
    setEditPopup,
    setSignupPopup,
  } = useProductContext();

  const openPopup = () => {
    setSignupPopup(true);
    setEditPopup(false);
    setPopup(true);
  };

  const handleSortChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="footer__bar">
      <div className="footer__header__left">
        <div className="products__list__length">
          {products.length} Suggestions
        </div>
        <div className="custom__select">
          <span>Sort By:</span>
          <select value={selected} onChange={handleSortChange}>
            <option value="likes">Upvotes</option>
            <option value="commentCount">Comments</option>
          </select>
          <span className="arrow"></span>
        </div>
      </div>
      <button onClick={openPopup}>+Add product</button>
    </div>
  );
};

export default SearchBar;
