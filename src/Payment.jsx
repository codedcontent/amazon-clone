import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { Link } from "react-router-dom";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Section 2 - Delivery Address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>554 Nature & Wildlife Areas.</p>
            <p>Lekki Conservation Centre</p>
          </div>
        </div>

        {/* Section 2 - Delivery Address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>

          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct data={item} />
            ))}
          </div>
        </div>

        {/* Section 2 - Delivery Address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">{/*  */}</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
