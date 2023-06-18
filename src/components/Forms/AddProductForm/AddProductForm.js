import React from "react";
import "./AddProductForm.css";

const AddProductForm = () => {
  return (
    <div>
      <form className="add__product">
        <div className="add__product__company__input">
          <input type="text" placeholder="Name of your company" />
        </div>
        <div className="add__product__category__input">
          <input type="text" placeholder="Category" />
        </div>
        <div className="add__product__logo__input">
          <input type="text" placeholder="Add logo url" />
        </div>
        <div className="add__product__product__link__input">
          <input type="text" placeholder="Link of product" />
        </div>
        <div className="add__product__password__input">
          <input type="password" placeholder="Password" />
        </div>
        <button type="submit" className="add__product__button">
          +Add
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
