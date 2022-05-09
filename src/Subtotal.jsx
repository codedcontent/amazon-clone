import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal ({basket.length} items): <strong>{value}</strong>
            <small className="subtotal__gift">
              <input type="checkbox" name="" id="" /> This order contains a gift
            </small>
          </p>
        )}
        decimalScale={2}
        value={basket.reduce((amount, item) => item.price + amount, 0)}
        displayType="text"
        thousandSeparator={true}
        prefix="₦"
      />

      {/* Checkout button */}
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
