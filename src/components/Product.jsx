import React from "react";
import "./Product.css";

const Product = ({ id,desc, title, rating, image, price }) => {
  return (
    <>
      <div className="product">
        <div className="container">
          <p className="title">{title}</p>
          <p className="desc">{desc}</p>
          <p className="price">Price :
            {/* <small> $</small> */}
            <strong> ${price}</strong>
          </p>
          <div className="rating">
          <p>Rating :</p>
            {Array(rating)
              .fill()
              .map((_,index) => (
                <p key={index}>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt="productImg" />
        <button>Add to Cart 🛒</button>
      </div>
    </>
  );
};

export default Product;
