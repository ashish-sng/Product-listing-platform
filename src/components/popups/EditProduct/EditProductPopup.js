import React from "react";
import "./EditProductPopup.css";
import EditProductForm from "../../Forms/EditProductForm/EditProductForm";
import PopupBanner from "../PopupBanner/PopupBanner";

const EditProductPopup = () => {
  return (
    <div className="edit__product__popup">
      <EditProductForm />
      <PopupBanner />
    </div>
  );
};

export default EditProductPopup;
