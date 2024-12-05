import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./ProgressBar.module.css";
import classNames from "classnames";

interface ProgressBarProps {
  activeIndex: number;
  items: { id: string; title: string }[];
  pageTitle: string;
  variant?: "dots" | "bar";
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  activeIndex,
  items,
  pageTitle,
  variant,
}) => {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]); // Store refs for all nav items
  const [barHeight, setBarHeight] = useState(0);

  useEffect(() => {
    const calculateBarHeight = () => {
      const totalHeight = window.innerHeight; // Full viewport height (100vh)
      const itemHeight = totalHeight / items.length; // Each item's height (evenly spaced)
      setBarHeight(itemHeight * (activeIndex + 1)); // Grow the bar to the current active item
    };

    calculateBarHeight();
    window.addEventListener("resize", calculateBarHeight); // Recalculate on resize
    return () => window.removeEventListener("resize", calculateBarHeight); // Cleanup
  }, [activeIndex, items]);

  const variantClass = variant === "dots" ? styles.dots : styles.bar;

  return (
    <div className={classNames(styles.progressContainer, variantClass)}>
      <div className={classNames(styles.hamburgerContainer, variantClass)}>
        <span className={classNames(styles.title, variantClass)}>
          {pageTitle}
        </span>
      </div>

      {/* Progress Bar */}
      <div className={classNames(styles.progressBarBackground, variantClass)}>
        <motion.div
          className={classNames(styles.progressBar, variantClass)}
          style={{
            height: `${barHeight}px`,
          }}
          animate={{
            height: `${barHeight}px`,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        />
      </div>

      {/* Navigation Items */}
      <div className={classNames(styles.navItemsContainer)}>
      <motion.ul
        className={classNames(styles.navItems, variantClass)}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {items.map((item, index) => (
          <motion.li
            key={item.id}
            ref={(el) => (itemRefs.current[index] = el)} // Assign ref to each item
            className={classNames(
              styles.navItem,
              variantClass,
              activeIndex === index ? styles.activeItem : ""
            )}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </motion.li>
        ))}
      </motion.ul>
      </div>
    </div>
  );
};

export default ProgressBar;
