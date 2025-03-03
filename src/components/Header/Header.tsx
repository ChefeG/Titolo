import React, { useState } from "react";
import styles from "./Header.module.css";
import { useHeaderStore } from "../../store/useHeaderStore";
import logo from "../../assets/bandLogo.svg";
import { languages, Navigations } from "./data";
import { UserRound, ShoppingCart, Heart, Search } from "lucide-react";
import { SideNav } from "../SideNav/SideNav";

const Header = () => {
  const [nowActive, setNowActive] = useState("EN");
  // const {language, setLanguage} = useHeaderStore()

  return (
    <header>
      {/* desktopContainer */}
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            {languages.map((lang, index) => (
              <a
                href={lang.link}
                key={index}
                className={`${
                  lang.language === nowActive ? styles.activeLink : ""
                }`}
                onClick={() => {
                  setNowActive(lang.language);
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
            <SideNav/>
            {/* {languages.map((lang, index) => (
              <a
                href={lang.link}
                key={index}
                className={`${
                  lang.language === nowActive ? styles.activeLink : ""
                }`}
                onClick={() => {
                  setNowActive(lang.language);
                }}
              >
                {lang.language}
              </a>
            ))} */}
          </div>
          <div>
            <img className={styles.brandLogo} src={logo} alt="logo" />
          </div>
          <div className={styles.topBarRight}>
            <a key="UserRound" href="#">
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
        {/* <div className={styles.mainNav}>
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
        </div> */}
      </div>
    </header>
  );
};

export default Header;
