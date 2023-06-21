import React, { useState, useEffect } from "react";
import "./EditProductForm.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import useProductContext from "../../../hooks/useProductContext";
import BASEURL from "../../../constants/base";

const EditProductForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [category, setCategory] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [productLink, setProductLink] = useState("");
  const [description, setDescription] = useState("");
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const { setPopup, setEditPopup, editId, setSignupPopup, setLoggedIn } =
    useProductContext();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    axios.get(`${BASEURL}/products/${editId}`).then((res) => {
      setCompanyName(res.data.companyName);
      setCategory(res.data.category);
      setImageURL(res.data.imageURL);
      setProductLink(res.data.productLink);
      setDescription(res.data.description);
    });
  }, [editId]); // eslint-disable-line react-hooks/exhaustive-deps

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
      id: editId,
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
      const response = await axios.put(`${BASEURL}/products`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response);

      setCompanyName("");
      setCategory("");
      setImageURL("");
      setProductLink("");
      setDescription("");

      toast.success("Product Updated Successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
      });
      setTimeout(() => {
        setPopup(false);
        setEditPopup(false);
      }, 1000);
    } catch (err) {
      if (err.response.status === 401) {
        toast.error("Please login to continue", {
          position: "top-center",
          autoClose: 1000,
        });
        setTimeout(() => {
          setPopup(true);
          setSignupPopup(false);
          setLoggedIn(false);
        }, 1000);

        return;
      }
      toast.error("Something went wrong", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <div>
      <form className="edit__product">
        <div className="edit__product__heading">
          {innerWidth < 500 ? <span>Edit your product</span> : null}
        </div>
        <div className="edit__product__company__input">
          <input
            value={companyName}
            onChange={handleCompanyNameChange}
            type="text"
            placeholder="Name of your company"
          />
        </div>
        <div className="edit__product__category__input">
          <input
            value={category}
            onChange={handleCategoryChange}
            type="text"
            placeholder="Category"
          />
        </div>
        <div className="edit__product__logo__input">
          <input
            value={imageURL}
            onChange={handleImageURLChange}
            type="text"
            placeholder="Add logo URL"
          />
        </div>
        <div className="edit__product__product__link__input">
          <input
            value={productLink}
            onChange={handleProductLinkChange}
            type="text"
            placeholder="Link of product"
          />
        </div>
        <div className="edit__product__description__input">
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
          className="edit__product__button"
        >
          Update
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditProductForm;
