import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";
import { ChevronLeft } from "lucide-react";

export const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); // Убираем пустые строки

  return (
    <>
    <div className={styles.container}>
      <Link className={styles.breadCrumbsLink} to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={routeTo}>
            {" > "}
            {isLast ? <span>{name}</span> : <Link className={styles.breadCrumbsLink} to={routeTo}>{name}</Link>}
          </span>
        );
      })}
    </div>
    <div className={styles.backToCategory}>
        <a href="/"><ChevronLeft/> BACK TO CATEGORY</a>
    </div>
    </>
  );
};