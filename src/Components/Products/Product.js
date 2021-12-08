import React from "react";
import ItemDesc from "./ItemDesc";
import styles from "./Product.module.css";

function Product({ name, description, price }) {
  return (
    <div className="ml-2 p-2 border border-2">
      {/* <h1>Product</h1> */}
      <p className={styles.error}> Error occured in Product </p>
      <ItemDesc name={name} description={description} />
      <span>Price :${price}</span>
    </div>
  );
}

export default Product;
