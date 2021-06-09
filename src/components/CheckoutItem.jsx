import React from "react";
import { Consumer } from "./StateProvider";
import "./CheckoutItem.css";
const CheckoutItem = ({ id, title, image, price, rating, desc }) => {
  // eslint-disable-next-line
  const [{}, dispatch] = Consumer();
  // console.log(cart);
  const removeFrmCart = () => {
    //remove item to cart:
    dispatch({
      type: "REMOVE_FROM_CART",
      id:id,
    });
  };
  return (
    <>
      <div className="item">
        <img className="image" src={image} alt="img" />
        <div className="itemInfo">
          <p className="title">{title}</p>
          <p className="desc">{desc}</p>
          <p className="price">
            Price :<strong> ${price}</strong>
          </p>
          <div className="rating">
            <p>Rating :</p>
            {Array(rating)
              .fill()
              .map((_, index) => (
                <p key={index}>⭐</p>
              ))}
          </div>
          <button onClick={removeFrmCart}>Remove from Cart 🛒</button>
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
