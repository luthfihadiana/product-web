import { useState } from "react";
import Product from "./Product";
import styles from "./Products.module.scss";
const Products = () => {
  return (
    <div className={styles.container}>
      <Product />
      <Product />
      <Product />
    </div>
  )
}

export default Products;