import React from "react";
import styles from "./DetailsAndDescription.module.css";
import {ChevronRight, Facebook, Link, MessageCircleMore, Twitter } from "lucide-react";

export const DetailsAndDescription = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>
        <h2>DETAILS & DESCRIPTION</h2>
      </div>
      <div className={styles.containerLinks}>
        <div className={styles.containerLinksLeft}>
           <h2>SHARE WITH YOUR FRIENDS</h2> 
           <div className={styles.icons}>
            <a><MessageCircleMore/></a>
            <a><Facebook/></a>
            <a><Twitter/></a>
            <a><Link/></a>
           </div>
        </div>
        <div className={styles.containerLinksRight}>
            
                <a>shipping & returns <ChevronRight/></a>
                <a>payment <ChevronRight/></a>
            
        </div>
      </div>
    </div>
  );
};
