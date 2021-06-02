import React from "react";
import "./Product.css";
import { Consumer } from "./StateProvider";
const Product = ({ id, desc, title, rating, image, price }) => {
  const [{ cart }, dispatch] = Consumer();
  const addToCart = () => {
    //add item to cart:
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        desc: desc,
        rating: rating,
      },
    });
  };
  return (
    <>
      <div className="product">
        <div className="container">
          <p className="title">{title}</p>
          <p className="desc">{desc}</p>
          <p className="price">
            Price :{/* <small> $</small> */}
            <strong> ${price}</strong>
          </p>
          <div className="rating">
            <p>Rating :</p>
            {Array(rating)
              .fill()
              .map((_, index) => (
                <p key={index}>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt="productImg" />
        <button onClick={addToCart}>Add to Cart 🛒</button>
      </div>
    </>
  );
};

export default Product;
