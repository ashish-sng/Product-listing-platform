import React, { useState } from "react";
import "./AddProductForm.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import useProductContext from "../../../hooks/useProductContext";

const AddProductForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [category, setCategory] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [productLink, setProductLink] = useState("");
  const [description, setDescription] = useState("");
  const { setPopup } = useProductContext();

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const categoryItem = e.target.value.split(",").map((item) => item);
    setCategory(categoryItem);
  };

  const handleImageURLChange = (e) => {
    setImageURL(e.target.value);
  };

  const handleProductLinkChange = (e) => {
    setProductLink(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      companyName,
      category: category.map((item) => item.trim()),
      imageURL,
      productLink,
      description,
    };

    try {
      if (
        !data.companyName ||
        !data.category ||
        !data.imageURL ||
        !data.productLink ||
        !data.description
      ) {
        toast.error("Please fill all the fields", {
          position: "top-center",
          autoClose: 1000,
        });
        return;
      }
      const response = await axios.post("http://localhost:4000/products", data);
      console.log(response);

      setCompanyName("");
      setCategory("");
      setImageURL("");
      setProductLink("");
      setDescription("");

      toast.success("Product Added Successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
      });
      setTimeout(() => {
        setPopup(false);
      }, 1000);
    } catch {
      toast.error("Something went wrong", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <div>
      <form className="add__product">
        <div className="add__product__company__input">
          <input
            value={companyName}
            onChange={handleCompanyNameChange}
            type="text"
            placeholder="Name of your company"
          />
        </div>
        <div className="add__product__category__input">
          <input
            value={category}
            onChange={handleCategoryChange}
            type="text"
            placeholder="Category"
          />
        </div>
        <div className="add__product__logo__input">
          <input
            value={imageURL}
            onChange={handleImageURLChange}
            type="text"
            placeholder="Add logo URL"
          />
        </div>
        <div className="add__product__product__link__input">
          <input
            value={productLink}
            onChange={handleProductLinkChange}
            type="text"
            placeholder="Link of product"
          />
        </div>
        <div className="add__product__description__input">
          <input
            value={description}
            onChange={handleDescriptionChange}
            type="text"
            placeholder="Description"
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="add__product__button"
        >
          +Add
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProductForm;
