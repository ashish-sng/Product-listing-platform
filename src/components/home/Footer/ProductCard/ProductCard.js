import React, { useState } from "react";
import "./ProductCard.css";
import comment1 from "../../../../assets/icons/comment1.png";
import comment2 from "../../../../assets/icons/comment2.png";
import upArrow from "../../../../assets/icons/upArrow.png";

const ProductCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showComments = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="product__card">
      <div className="product__card__img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgnkxyLid3xn09B6izDNDzdvm9vwPf6tgb0S4bekqsQ&s"
          alt="product"
        />
      </div>
      <div className="product__card__content">
        <span>{data.name}</span>
        <span>{data.description}</span>
        <div className="product__card__last__section">
          <div className="product__card__category">
            {data.category.map((category, index) => (
              <span key={index}>{category}</span>
            ))}
          </div>
          <div className="product__card__comment" onClick={showComments}>
            <img src={comment1} alt="comment" />
            <span>comment</span>
          </div>
        </div>
        <div className={`product__card__all__comments ${isOpen ? "open" : ""}`}>
          {data.comments.map((comment, index) => (
            <span key={index}>{comment}</span>
          ))}
        </div>
      </div>
      <div className="product__card__right">
        <div className="product__card__likes">
          <img src={upArrow} alt="upArrow" />
          <span>{data.likes}</span>
        </div>
        <div className="product__card__comments">
          <span>{data.comments.length}</span>
          <img src={comment2} alt="comment" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
