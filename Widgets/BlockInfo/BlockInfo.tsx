import React from "react";
import styles from "./BlockInfo.module.css";
import { ArrowRight } from "lucide-react";

export const BlockInfo = ({ data, title }: { data: any; title: any }) => {
  return (
    <div className={styles.blockInfo}>
      <div className={styles.blockContent}>
        <h2>{title.mainTitle.toUpperCase()}</h2>
        <p>{title.secondTitle}</p>
      </div>
      <div className={styles.wrapper}>
        {data.map((elem: any, index: number) => (
          <div className={styles.card}>
            <img src={elem.image} alt={`${index}`} />
            <div className={styles.cardContent}>
              {elem.buttonTitle !== "" && <button>{elem.buttonTitle}</button>}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonExplore}>
        {title.buttonTitle !== "" && <button>{title.buttonTitle}<ArrowRight /></button>}
      </div>
    </div>
  );
};
