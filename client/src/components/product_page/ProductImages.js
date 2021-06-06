import React, { useState } from "react";
import gallaryStyles from "../../styles/components/image.module.scss";
const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <div className={gallaryStyles.gallery}>
      <img src={main.url} alt="main" className={gallaryStyles.main} />
      <div className={gallaryStyles["gallery-images"]}>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${
                image.url === main.url ? gallaryStyles.active : null
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
