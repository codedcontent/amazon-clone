import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ data: { id, title, price, img, rating } }) => {
  const [_, dispatch] = useStateValue();

  const removeFromCart = () => {
    // Dispatch item into the data layer
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={img} alt={title} className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">{price}</p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => {
              return <p key={index}>⭐</p>;
            })}
        </div>

        <button onClick={removeFromCart}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
