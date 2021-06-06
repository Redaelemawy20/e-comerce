import React from "react";
import productStyle from "../../styles/pages/products_page.module.scss";
import { formatPrice } from "../../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ image, name, price, id }) => {
  return (
    <div className={productStyle.product}>
      <div className={productStyle.container}>
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className={productStyle.link}>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </div>
  );
};

export default Product;
