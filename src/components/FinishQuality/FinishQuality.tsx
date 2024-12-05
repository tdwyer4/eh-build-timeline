import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FinishQuality.module.css";
import signatureImage from "../../media/signature.jpeg";
import transitionalImage from "../../media/transitional.jpeg";
import { SectionHeader } from "../SectionHeaderText/SectionHeaderText";

type Style = "signature" | "transitional";

const FinishQuality = () => {
  const [activeStyle, setActiveStyle] = useState<Style>("signature");

  const ActiveSlider = sliders[activeStyle];

  return (
    <motion.div className={styles.mainContainer}>
      <div className={styles.mainContainerContent}>
        <div className={styles.mainContainerContentWrap}>
          <SectionHeader
            title="Finish Quality"
            description="Our two distinctive styles, Signature and Transitional, feature impeccable craftsmanship, unmatched attention to detail, and are loaded with features that most builders consider to be costly upgrades."
          />
          <div className={styles.topButtonContainer}>
            {(Object.keys(sliders) as Style[]).map((style) => (
              <motion.button
                key={style}
                onClick={() => setActiveStyle(style)}
                whileHover={{ y: 0 }}
                className={`${styles.topButton} ${
                  activeStyle === style ? styles.activeButton : ""
                }`}
              >
                {style.charAt(0).toUpperCase() + style.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <ActiveSlider />
      </div>
    </motion.div>
  );
};

type SigVideo = "Living Room" | "Kitchen" | "Bathroom" | "Bedroom" | "Office";

const signatureVideos: Record<SigVideo, string> = {
  "Living Room": signatureImage,
  Kitchen: transitionalImage,
  Bathroom: signatureImage,
  Bedroom: transitionalImage,
  Office: signatureImage,
};

const SigSlider = () => {
  const [sigVideo, setSigVideo] = useState<SigVideo>("Living Room");

  return (
    <div className={styles.styleContainer}>
      <motion.div
        className={styles.container}
        style={{ backgroundImage: `url(${signatureVideos[sigVideo]})` }}
      >
        <div className={styles.bottomContent}>
          <div className={styles.bottomContentWrap}>
            <div className={styles.chooseStyleTextContainer}>
              <h3 className={styles.chooseStyleTitle}>Signature</h3>
              <p className={styles.chooseStyleDescription}>
                Signature is our original style and remains timeless 15 years
                after it was first introduced. The style is defined by arched
                openings, warm colors, rich stains, and classically
                sophisticated details at every turn.
              </p>
            </div>
            <div className={styles.buttonContainer}>
              {(Object.keys(signatureVideos) as SigVideo[]).map((key) => (
                <motion.button
                  key={key}
                  onClick={() => setSigVideo(key)}
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

type TransVideo = "Living Room" | "Kitchen" | "Bathroom" | "Bedroom" | "Office";

const transitionalVideos: Record<TransVideo, string> = {
  "Living Room": transitionalImage,
  Kitchen: signatureImage,
  Bathroom: transitionalImage,
  Bedroom: signatureImage,
  Office: transitionalImage,
};

const TransSlider = () => {
  const [transVideo, setTransVideo] = useState<TransVideo>("Living Room");

  return (
    <div className={styles.styleContainer}>
      <motion.div
        className={styles.container}
        style={{ backgroundImage: `url(${transitionalVideos[transVideo]})` }}
      >
        <div className={styles.bottomContent}>
          <div className={styles.bottomContentWrap}>
            <div className={styles.chooseStyleTextContainer}>
              <h3 className={styles.chooseStyleTitle}>Transitional</h3>
              <p className={styles.chooseStyleDescription}>
                Our Transitional style blends modern and classic finishes to
                allow you the flexibility to decorate your home with vibrant
                pops of color, understated designer finishes, or anything in
                between. It’s the perfect palette for any direction you might
                go.
              </p>
            </div>
            <div className={styles.buttonContainer}>
              {(Object.keys(transitionalVideos) as TransVideo[]).map((key) => (
                <motion.button
                  key={key}
                  onClick={() => setTransVideo(key)}
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

const sliders: Record<Style, React.FC> = {
  signature: SigSlider,
  transitional: TransSlider,
};

export default FinishQuality;
