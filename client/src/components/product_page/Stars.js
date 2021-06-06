import React from "react";
import starsStyles from "../../styles/pages/product_page.module.scss";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className={starsStyles["stars-container"]}>
      <div className={starsStyles.stars}>{tempStars}</div>
      <p className={starsStyles.reviews}>({reviews} customer reviews)</p>
    </div>
  );
};

export default Stars;
