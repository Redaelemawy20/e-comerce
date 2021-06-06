import React from "react";
import listStyle from "../../styles/pages/products_page.module.scss";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
const ListView = ({ products }) => {
  return (
    <div className={listStyle["product-list"]}>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className={listStyle.price}>{formatPrice(price)}</h5>
              <p className={listStyle.desc}>
                {description.substring(0, 150)}...
              </p>
              <Link to={`/products/${id}`} className={listStyle.btn}>
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListView;
