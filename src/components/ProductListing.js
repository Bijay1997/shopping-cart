import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import IndividualProduct from "./IndividualProduct";
import { setProducts } from "../redux/actions/productActions";
import Sizes from '../components/Sizes/Sizes';
const ProductListing = () => {
  //   const products = useSelector((state) => state);
  // const sizes= useSelector((state) => state.allProducts.sizes);
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();


  const fetchProducts = async () => {
    const response = await axios
      .get(
        "https://react-shopping-cart-67954.firebaseio.com/products.json?fbclid=IwAR1uDUVrepmXDIoGo-FgvYoAMslhe7S3THi1IGFdoQ3d13X98axxH22lecU"
      )
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(response.data);
    dispatch(setProducts(response.data.products));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  // const filterProducts = products.filter
  return (
    <div style={{
      width:'100%'
    }}>
      <div style={{
        width:'25%',
      }}> <Sizes />
      </div>
     <div style={{
      width:'75%'
     }}>

     
      {products.map((product) => (
        // filterproducts.map((product) => )
        <IndividualProduct product={product} key={product.id} />
      ))}
      </div>
      {/* <IndividualProduct /> */}

    </div>
  );
};

export default ProductListing;
