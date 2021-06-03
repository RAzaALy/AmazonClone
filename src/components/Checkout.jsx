import React from "react";
import "./Checkout.css";
import { Consumer } from "./StateProvider";
import CheckoutItem from "./CheckoutItem";
import SubTotal from "./SubTotal";
const Checkout = () => {
  const [{ cart }] = Consumer();
  return (
    <div className={"" + cart?.length > 0 ? "check" : null}>
      <div className="checkout">
        <img className="checkoutAd" src="images/ads.jpg" alt="ads" />
        {cart.length > 0 && (
          <div className="rightPanel">
            <SubTotal />
          </div>
        )}
        {cart?.length === 0 ? (
          <div>
            <h1 className="title">Your Shopping Cart is empty!</h1>
            <p className="desccription">
              You have no items in your cart,to buy one or "Add to Cart".
            </p>
          </div>
        ) : (
          <div>
            <h2 className="title">Your Shopping Cart</h2>
            <hr />
            {/* list out all the checkout Products 😄 */}
            {cart.map((item, index) => (
              <CheckoutItem
                id={item.id}
                key={index}
                title={item.title}
                image={item.image}
                desc={item.desc}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
