import { AlignJustify, ChevronDown, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import styles from "./SideNav.module.css";
import { languages, Navigations } from "./data";
import { useHeaderStore } from "../../store/useHeaderStore";

export const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);
  const { language, setLanguage } = useHeaderStore();

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleCategory = (index:any) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  //фиксаця скрола body и сохранение позиции sidebarNav
  useEffect(() => {
    if (isOpen) {
      const scrollPosition = window.scrollY; //позиция в данный момент в px
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollPosition = -parseInt(document.body.style.top || "0");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "auto";
      window.scrollTo(0, scrollPosition);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <button
        id="sideBarButton"
        className={styles.menuBtn}
        onClick={toggleSideNav}
      >
        <AlignJustify className={`${styles.icon} ${!isOpen ? styles.visible : styles.hidden}` }/>
        <X className={`${styles.icon} ${isOpen ? styles.visible : styles.hidden}` }/>

      </button>
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <nav className={styles.sidebarNav}>
          <ul>
            <li className={styles.languages}>
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
            </li>
            <div className={styles.navigation}>
              {Navigations.map((nav, index) => (
                nav.link !== '' ? <a href={nav.link} key={index} className={styles.nav}>
                <li>{nav.title}</li>
              </a> : <a onClick={toggleCategory} className={styles.subBar}><li>{nav.title}<ChevronDown/></li></a>
              ))}
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};
