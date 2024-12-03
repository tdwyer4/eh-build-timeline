import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./GetStartedStyle.module.css";

import signatureImage from "../../../media/signature.jpeg";
import transitionalImage from "../../../media/transitional.jpeg";

type Style = "signature" | "transitional";

const backgroundImages: Record<Style, string> = {
  signature: signatureImage,
  transitional: transitionalImage,
};

const GetStartedStyle = () => {
  const [activeStyle, setActiveStyle] = useState<Style>("signature");

  return (
    <div className={styles.styleContainer}>
      <motion.div
        className={styles.container}
        style={{ backgroundImage: `url(${backgroundImages[activeStyle]})` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className={styles.bottomContent}>
          <div className={styles.bottomContentWrap}>
            <div className={styles.chooseStyleTextContainer}>
              <h3 className={styles.chooseStyleTitle}>Choose Your Style</h3>
              <p className={styles.chooseStyleDescription}>
                Select from our Signature or Transitional style homes.
              </p>
            </div>
            <div className={styles.buttonContainer}>
              {(Object.keys(backgroundImages) as Style[]).map((key) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveStyle(key)}
                  whileHover={{ y: 0 }}
                  className={styles.button}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStartedStyle;
