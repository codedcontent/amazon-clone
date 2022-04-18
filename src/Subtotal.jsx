import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal (0 items): <strong>0</strong>
            <small className="subtotal__gift">
              <input type="checkbox" name="" id="" /> This order contains a gift
            </small>
          </p>
        )}
        decimalScale={2}
        value={0}
        displayType="text"
        thousandSeparator={true}
        prefix="₦"
      />
    </div>
  );
};

export default Subtotal;
