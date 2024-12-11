import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProgressBar.module.css";
import classNames from "classnames";

interface ProgressBarItem {
  id: string;
  title: string;
  subItems?: ProgressBarItem[];
}

interface ProgressBarProps {
  activeIndex: number;
  items: ProgressBarItem[];
  pageTitle: string;
  variant?: "dots" | "bar";
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  activeIndex,
  items,
  pageTitle,
  variant,
}) => {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [barHeight, setBarHeight] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [localActiveIndex, setLocalActiveIndex] = useState<number>(activeIndex); // Local activeIndex state

  useEffect(() => {
    const calculateBarHeight = () => {
      if (itemRefs.current[localActiveIndex]) {
        const activeItemRect = itemRefs.current[localActiveIndex]?.getBoundingClientRect();
        const progressContainerRect = document
          .querySelector(`.${styles.progressContainer}`)
          ?.getBoundingClientRect();

        if (activeItemRect && progressContainerRect) {
          const height =
            activeItemRect.top - progressContainerRect.top + activeItemRect.height / 2;
          setBarHeight(height);
        }
      }
    };

    calculateBarHeight();
    window.addEventListener("resize", calculateBarHeight);
    return () => window.removeEventListener("resize", calculateBarHeight);
  }, [localActiveIndex]);

  const handleNavigationClick = (
    event: React.MouseEvent,
    item: ProgressBarItem,
    index: number
  ) => {
    event.preventDefault();

    // Scroll to the first sub-item's section if sub-items exist; otherwise, scroll to the main item's section
    const targetId = item.subItems?.[0]?.id || item.id;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setLocalActiveIndex(index); // Update local activeIndex on click
    }
  };

  const variantClass = variant === "dots" ? styles.dots : styles.bar;

  return (
    <div className={classNames(styles.progressContainer, variantClass)}>
      <div className={classNames(styles.hamburgerContainer, variantClass)}>
        <span className={classNames(styles.title, variantClass)}>
          {pageTitle}
        </span>
      </div>
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
      <div className={classNames(styles.navItemsContainer)}>
        <motion.ul
          className={classNames(styles.navItems, variantClass)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              <motion.li
                ref={(el) => (itemRefs.current[index] = el)}
                className={classNames(
                  styles.navItem,
                  variantClass,
                  localActiveIndex === index || hoveredIndex === index
                    ? styles.activeItem
                    : ""
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={(event) =>
                  handleNavigationClick(event, item, index)
                }
                style={{ position: "relative" }}
              >
                <a href={`#${item.id}`}>{item.title}</a>
                {(hoveredIndex === index || localActiveIndex === index) &&
                  item.subItems && (
                    <motion.ul
                      className={classNames(styles.subNavItems, variantClass)}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{
                        position: "absolute",
                        top: "100%",
                        right: "0",
                        zIndex: 10,
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {item.subItems.map((subItem) => (
                        <motion.li
                          key={subItem.id}
                          className={classNames(
                            styles.subNavItem,
                            variantClass
                          )}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <a
                            href={`#${subItem.id}`}
                            onClick={(event) =>
                              handleNavigationClick(event, subItem, index)
                            }
                          >
                            {subItem.title}
                          </a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
              </motion.li>
            </React.Fragment>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default ProgressBar;