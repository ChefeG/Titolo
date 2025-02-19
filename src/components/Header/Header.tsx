import React from "react";
import styles from "./Header.module.css";
import brandLogo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className="styles">
      <div className={styles["top-bar"]}>
          <div className={styles["top-bar-left"]}>
            <a href="#" className="lang-switch">
              EN
            </a>
            <a href="#" className="lang-switch">
              RU
            </a>
            <a href="#" className="lang-switch">
              FR
            </a>
            <a href="#" className="lang-switch">
              IT
            </a>
          </div>
        <div className={styles["logo"]}>
          <img src={brandLogo} alt="logo" />
        </div>
        <div className={styles["top-bar-right"]}>
          <a href="#" className="icon-user">
            user
          </a>
          <a href="#" className="icon-heart">
            heart
          </a>
          <a href="#" className="icon-cart">
            cart
          </a>
        </div>
      </div>

      <div className={styles["main-nav"]}>
        <nav className={styles["nav-left"]}>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Brands</a>
          <a href="#">New Arrivals</a>
          <a href="#">Coming Soon</a>
          <a href="#">Sale</a>
          <a href="#">Editorial</a>
          <a href="#">Raffles</a>
        </nav>
        <div className={styles["input-right"]}>
          <input type="text" placeholder="Search entire store here..." />
        </div>
      </div>
    </header>
  );
}
