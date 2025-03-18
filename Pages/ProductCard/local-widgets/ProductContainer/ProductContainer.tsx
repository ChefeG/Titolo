import React, { useState } from "react";
import styles from "./ProductContainer.module.css";
import {
  BookX,
  Box,
  ChevronDown,
  ChevronUp,
  Heart,
  LucideBox,
  ShoppingBag,
  Square,
  SquareCheckBig,
} from "lucide-react";
import {
  Descriptions,
  Description,
  Images,
  ImagesSrc,
} from "../../local-entities/ProductContainer/ProductContainerData";
import { useProductContainerStore } from "../../local-entities/ProductContainer/useProductContainerStore";

export const ProductContainer = () => {
  const descriptions: Description = Descriptions;
  const images: ImagesSrc[] = Images;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { countrySize, setCountrySize } = useProductContainerStore();
  const [sizeActive, setSizeActive] = useState(0);

  const toggleSizeButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerImages}>
        {images.map((image, index) => (
          <img key={index} src={image.link} alt={String(index)} />
        ))}
      </div>

      {/* ОПИСАНИЕ ТОВАРА */}
      <div className={styles.description}>
        <div className={styles.brandTitle}>
          <h2>{descriptions.title.toUpperCase()}</h2>
          <Heart />
        </div>
        <p>{descriptions.brand}</p>
        <p>${descriptions.price}</p>
        <p>{descriptions.article}</p>

        {/* КНОПКИ РАЗМЕРА И КОРЗИНЫ */}
        <div className={styles.sizeAndAddToCart}>
          <button onClick={toggleSizeButton}>
            {descriptions.buttonSize}
            {!isOpen ? <ChevronDown /> : <ChevronUp />}
          </button>
          <button>
            <ShoppingBag />
            {descriptions.buttonAdd}
          </button>
        </div>

        {/* РАЗМЕРНАЯ СЕТКА */}
        {isOpen && (
          <div className={styles.sizeGrid}>
            <div className={styles.countrySize}>
              <button
                className={countrySize === "CM" ? styles.active : ""}
                value="CM"
                onClick={() => setCountrySize("CM")}
              >
                CM
              </button>
              <button
                className={countrySize === "EU" ? styles.active : ""}
                value="EU"
                onClick={() => setCountrySize("EU")}
              >
                EU
              </button>
              <button
                className={countrySize === "UK" ? styles.active : ""}
                value="UK"
                onClick={() => setCountrySize("UK")}
              >
                UK
              </button>
              <button
                className={countrySize === "US MEN" ? styles.active : ""}
                value="US MEN"
                onClick={() => setCountrySize("US MEN")}
              >
                US MEN
              </button>
            </div>
            {/* ВЫВОД РАЗМЕРНОЙ СЕТКИ */}
            {countrySize == 'EU' && 
              descriptions.sizes.map((size, index) => (
                <button key={index} onClick={() => setSizeActive(size)} className={styles.sizeOption}>
                  {sizeActive === size ? <SquareCheckBig style={{color: "black"}} /> : <Square />}
                  {size}
                </button>
              ))
            }
            
          </div>
        )}

        <a className={`${styles.link} ${styles.availability}`}>
          {descriptions.link}
        </a>
        <div className={styles.loyaltyInfo}>
          <h3>loyalty points</h3>
          <p>
            Order now to receive{" "}
            <strong className={styles.highlight}>
              ${descriptions.price * 100} loyalty points ${descriptions.price}
            </strong>{" "}
            for your order. This amount may vary after logging in.{" "}
            <a className={styles.link}>Learn more about loyalty points</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
