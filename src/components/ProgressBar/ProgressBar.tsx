import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  progress: number; // Progress percentage (0-100)
  activeIndex: number; // Current active section index
  items: { id: string; title: string }[]; // List of navigation items
  pageTitle: string; // Current page title
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  activeIndex,
  items,
  pageTitle,
}) => {
  const [navExpanded, setNavExpanded] = useState(false); // State for navigation menu

  const toggleNav = () => setNavExpanded((prev) => !prev); // Toggle navigation state

  const listVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <div className={styles.progressContainer}>
      {/* Hamburger and Title */}
        
      <div className={styles.hamburgerContainer}>
        <div>
            <span className={styles.title}>{pageTitle}</span>
        </div>
        <div className={styles.hamburger} onClick={toggleNav}>
            <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M4 6H20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M4 12H20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M4 18H20"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />
            </svg>

        </div>
        </div>

      {/* Progress Bar */}
      <div className={styles.progressBarBackground}>
        <motion.div
          className={styles.progressBar}
          style={{ height: `${progress}%` }}
        />
      </div>

      {/* Navigation Items (Appear on Hamburger Click) */}
      <AnimatePresence>
        {navExpanded && (
          <motion.ul
            className={styles.navItems}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {items.map((item, index) => (
              <motion.li
                key={item.id}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={listVariants}
                className={`${styles.navItem} ${
                  activeIndex === index ? styles.activeItem : ""
                }`}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProgressBar;
