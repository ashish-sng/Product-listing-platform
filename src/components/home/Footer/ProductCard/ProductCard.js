import React, { useState } from "react";
import "./ProductCard.css";
import comment1 from "../../../../assets/icons/comment1.png";
import comment2 from "../../../../assets/icons/comment2.png";
import upArrow from "../../../../assets/icons/upArrow.png";
import CommentBox from "./CommentBox/CommentBox";
import axios from "axios";

const ProductCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fullDescription, setFullDescription] = useState(false);
  const [likeCount, setLikeCount] = useState(data.likes);

  const showComments = () => {
    setIsOpen(!isOpen);
  };

  const increaseLike = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/products/${data._id}/like`
      );
      setLikeCount(response.data.likes);
    } catch (error) {
      console.log(error);
    }
  };

  const showFullDescription = () => {
    setFullDescription(!fullDescription);
  };

  return (
    <div className="product__card__container">
      <div className="product__card">
        <div className="product__card__img">
          <img src={data.imageURL} alt="product" />
        </div>
        <div className="product__card__content">
          <span>{data.companyName}</span>
          <span
            className={`product__card__description ${
              fullDescription ? "expanded" : ""
            }`}
            onClick={showFullDescription}
          >
            {data.description}
          </span>
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
        </div>
        <div className="product__card__right">
          <div className="product__card__likes">
            <img onClick={increaseLike} src={upArrow} alt="upArrow" />
            <span>{likeCount}</span>
          </div>
          <div className="product__card__comments">
            <span>{data.commentCount}</span>
            <img src={comment2} alt="comment" />
          </div>
        </div>
      </div>
      {isOpen ? <CommentBox id={data._id} /> : null}
    </div>
  );
};

export default ProductCard;
