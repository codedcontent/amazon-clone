import React from "react";
import "./Product.css";

const Product = ({ title, price, img, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        {/* Product rating */}
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => {
              return <p key={index}>⭐</p>;
            })}
        </div>
      </div>
      <img src={img} />

      <button>Add to basket</button>
    </div>
  );
};

export default Product;
