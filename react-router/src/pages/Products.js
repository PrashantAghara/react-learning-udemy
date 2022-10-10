import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Laptop</Link>
        </li>
        <li>
          <Link to="/products/p3">Phone</Link>
        </li>
      </ul>
    </>
  );
};

export default Products;
