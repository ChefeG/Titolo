import React from "react";
import styles from "./ProductContainer.module.css";
import {
  BookX,
  Box,
  ChevronDown,
  Heart,
  LucideBox,
  ShoppingBag,
} from "lucide-react";
import {
  Descriptions,
  Description,
  Images,
  ImagesSrc,
} from "../../local-entities/ProductContainer/ProductContainerData";

export const ProductContainer = () => {
  const descriptions: Description = Descriptions;
  const images: ImagesSrc[] = Images;
  return (
    <div className={styles.container}>
      <div className={styles.containerImages}>
        {images.map((image, index) => (
          <img key={index} src={image.link} alt={String(index)} />
        ))}
      </div>
      <div className={styles.description}>
        <div className={styles.brandTitle}>
          <h2>
            {descriptions.title.toUpperCase()} 
          </h2>
          <Heart />
        </div>
        <p>{descriptions.brand}</p>
        <p>${descriptions.price}</p>
        <p>{descriptions.article}</p>

        <div className={styles.sizeAndAddToCart}>
          <button>
            {descriptions.buttonSize}
            <ChevronDown />
          </button>
          <button>
            <ShoppingBag />
            {descriptions.buttonAdd}
          </button>
        </div>
        <a className={`${styles.link} ${styles.availability}`}>{descriptions.link}</a>
        <div className={styles.loyaltyInfo}>
          <h3>loyalty points</h3>
          <p>Order now to receive <strong className={styles.highlight}>${
            descriptions.price * 100
          } loyalty points ${
            descriptions.price
          }</strong> for your order. This amount may vary after logging in. <a className={styles.link}>Learn more about loyalty points</a>.</p>
        </div>
      </div>
    </div>
  );
};
