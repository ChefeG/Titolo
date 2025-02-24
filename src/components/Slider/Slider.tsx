import React from "react";
import { teasers } from "./data";
import styles from "./Slider.module.css";

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        id="arrowLeft"
      >-</button>
      <div className={styles.sliderWrapper}>
        {teasers.map((teaser, index) => (
          <div className={styles.card}>
            <img key={index} src={teaser.image} alt={teaser.title} />
            <div className={styles.cardContent}>
              <h3>{teaser.title}</h3>
              <button>{teaser.buttonTitle}</button>
            </div>
          </div>
        ))}
      </div>
      <button className={`${styles.arrow} ${styles.arrowRight}`} id="arrowRight">+</button>
    </div>
  );
};
