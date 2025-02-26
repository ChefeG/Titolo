import React from "react";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ data }: { data: any }) => {
  function truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <div className={styles.swiperProduct}>
      <img src={data.image1} />
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
