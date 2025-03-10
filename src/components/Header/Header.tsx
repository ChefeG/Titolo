import React, { useState } from "react";
import styles from "./Header.module.css";
import { useHeaderStore } from "../../store/useHeaderStore";
import logo from "../../assets/bandLogo.svg";
import { languages, Navigations } from "./data";
import { UserRound, ShoppingCart, Heart, Search, X } from "lucide-react";
import { SideNav } from "../SideNav/SideNav";

const Header = () => {
  const { language, setLanguage } = useHeaderStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      {/* desktopContainer */}
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            {languages.map((lang, index) => (
              <a
                href={lang.link}
                key={index}
                className={`${
                  lang.language === language ? styles.activeLink : ""
                }`}
                onClick={() => {
                  setLanguage(lang.language);
                }}
              >
                {lang.language}
              </a>
            ))}
          </div>
          <div>
            <img className={styles.brandLogo} src={logo} alt="logo" />
          </div>
          <div className={styles.topBarRight}>
            <a key="UserRound" href="#">
              <UserRound />
            </a>
            <a key="Heart" href="#">
              <Heart />
            </a>
            <a key="ShoppingCart" href="#">
              <ShoppingCart />
            </a>
          </div>
        </div>
        <div className={styles.mainNav}>
          <div className={styles.mainNavLeft}>
            {Navigations.map((nav, index) => (
              <a href={nav.link} key={index} className={styles.nav}>
                {nav.title}
              </a>
            ))}
          </div>
          <div className={styles.mainNavRight}>
            <div className={styles.searchContainer}>
              <Search className={styles.searchIcon} />
              <form>
                <input type="text" placeholder="Search entire store here..." />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* mobileContainer */}
      <div className={styles.mobileContainer}>
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <SideNav />
          </div>
          <div>
            <img className={styles.brandLogo} src={logo} alt="logo" />
          </div>
          <div className={styles.topBarRight}>
            <a
              className={styles.searchBtn}
              onClick={toggleSearchNav}
              key="Search"
            >
              <Search />
            </a>
            <a key="Heart" href="#">
              <Heart />
            </a>
            <a key="ShoppingCart" href="#">
              <ShoppingCart />
            </a>
          </div>
        </div>
        {isOpen && (
          <div className={styles.searchMobileContainer}>
            <input type="text" placeholder="Search entire store here..." />
            <a className={styles.xSearchBtn} onClick={toggleSearchNav}>
              <X />
            </a>
            {
              <div
                className={styles.overlay}
                onClick={() => setIsOpen(false)}
              />
            }
          </div>
        )}
        {/* <div className={styles.mainNav}>
          <div className={styles.mainNavRight}>
            <div className={styles.searchContainer}>
              <Search className={styles.searchIcon} />
              <form>
                <input type="text" placeholder="Search entire store here..." />
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
