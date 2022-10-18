import React from "react";
import { useSelector } from "react-redux";
import productImage from "../images/products/876661122392077-1-cart.webp";
import "./IndividualProduct.css";

const IndividualProduct = (props) => {
  const { id, title, price } = props.product;

  return (
    <div className="shoppingCard" key={id}>
      {/* // style={{ */}
      {/* //   border: "1px solid red",
        
      // }}> */}
      <div className="card">
    
      
      </div>
      <div className="image">
        
      <img src={productImage} alt={title} height={200} /> 
      <div ClassName="content">
         <div className="header"> {title}</div> 
        <div className="dollar"> $ {price} </div>
        <div><button className="btn">Add to cart</button></div>
      </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
