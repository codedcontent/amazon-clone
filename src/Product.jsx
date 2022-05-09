import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, img, rating }) => {
  const [_, dispatch] = useStateValue();

  const addToCart = () => {
    // Dispatch item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, title, price, img, rating },
    });
  };

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
      <img src={img} alt={title} />

      <button onClick={addToCart}>Add to basket</button>
    </div>
  );
};

export default Product;
