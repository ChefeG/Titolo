import React, { useState } from "react";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ data }: { data: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imageContainer}>
        <img 
        src={data.image1}
        className={isHovered ? styles.fadeOut : styles.fadeIn}
        alt={`${data.id}_1`} 
        />
        <img 
        src={data.image2}
        className={isHovered ? styles.fadeIn : styles.fadeOut}
        alt={`${data.id}_2`} 
        />
      </div>

      <div className={styles.productInfo}>
        <a href="#">{truncateText(data.title.toUpperCase(), 30)}</a>
        <p className={styles.brand}>{data.brand}</p>
        <div className={data.finalPrice === '' ? styles.withoutDiscount : styles.withDiscount}>
        <span>{data.prevPrice}</span>
        <span>{data.finalPrice}</span>
        </div>
      </div>
    </div>
  );
};
