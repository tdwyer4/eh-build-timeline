import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  activeIndex: number;
  categories: {
    categoryName: string;
    items: { id: string; title: string }[];
  }[];
  pageTitle: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  activeIndex,
  categories,
  pageTitle,
}) => {
  const [barHeight, setBarHeight] = useState(0);

  useEffect(() => {
    const calculateBarHeight = () => {
      const totalHeight = window.innerHeight;
      const totalItems = categories.flatMap((cat) => cat.items).length;
      const itemHeight = totalHeight / totalItems;
      setBarHeight(itemHeight * (activeIndex + 1));
    };

    calculateBarHeight();
    window.addEventListener("resize", calculateBarHeight);
    return () => window.removeEventListener("resize", calculateBarHeight);
  }, [activeIndex, categories]);

  return (
    <div className={styles.progressContainer}>
      <h1 className={styles.title}>{pageTitle}</h1>
      <motion.div
        className={styles.progressBar}
        style={{ height: `${barHeight}px` }}
      />
      <ul className={styles.navItems}>
        {categories.flatMap(({ items }) =>
          items.map(({ id, title }) => (
            <li
              key={id}
              className={`${styles.navItem} ${
                activeIndex === parseInt(id, 10) ? styles.activeItem : ""
              }`}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ProgressBar;
