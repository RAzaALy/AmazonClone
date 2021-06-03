import React from "react";
import CurrencyFormat from "react-currency-format";
import { Consumer } from "./StateProvider";
import { getCartTotal } from "../reducer";
import "./SubTotal.css";
const SubTotal = () => {
  const [{ cart }] = Consumer();
  return (
    <>
      <div className="subtotal">
        {/* price */}
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className="total">
                Subtotal ({cart.length} items): <strong> {`${value}`}</strong>
              </p>
              <small className="gift">
                <input type="checkbox" name="" id="" />
                This order contains a gift 🎁
              </small>
            </>
          )}
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        ></CurrencyFormat>
        <button>Proceed to Checkout</button>
      </div>
    </>
  );
};

export default SubTotal;
