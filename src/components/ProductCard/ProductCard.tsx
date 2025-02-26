import React, { useState } from "react";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ data }: { data: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMousEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  function truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <div
      className={styles.swiperProduct}
      onMouseEnter={handleMousEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={isHovered ? data.image2 : data.image1} />
      <div className={styles.productInfo}>
        <a href="#">{truncateText(data.title.toUpperCase(), 30)}</a>
        <p className={styles.brand}>{data.brand}</p>
        <div className={styles.productPrice}>
          <span>{data.prevPrice}</span>
          <span>{data.finalPrice}</span>
        </div>
      </div>
    </div>
  );
};
