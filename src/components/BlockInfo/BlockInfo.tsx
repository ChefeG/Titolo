import React from "react";
import styles from "./BlockInfo.module.css";

export const BlockInfo = ({ data, title }: { data: any; title: any }) => {
  return (
    <div className={styles.blockInfo}>
      <div className={styles.blockContent}>
        <h2>{title.mainTitle}</h2>
        <p>{title.secondTitle}</p>
      </div>
      <div className={styles.wrapper}>
        {data.map((elem: any, index: number) => (
          <div className={styles.card}>
            <img src={elem.image} alt={`${index}`} />
            <div className={styles.cardContent}>
              <button>{elem.buttonTitle}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
