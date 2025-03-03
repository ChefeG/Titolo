import { AlignJustify } from "lucide-react";
import React, { useState } from "react";
import styles from "./SideNav.module.css";
import { languages } from "../Header/data";

export const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nowActive, setNowActive] = useState("EN");

  const toggleSideNav = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button id="sideBarButton" className={styles.menuBtn}>
        <AlignJustify />
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav className={styles.sidebarNav}>
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
          <ul></ul>
        </nav>
      </div>
    </div>
  );
};
