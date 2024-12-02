import { motion } from "framer-motion";
import PathCardContent from "../PathCard/pathCardContent";
import styles from "./Hero.module.css";  
import HeroContent from './HeroContent';  

function Hero() {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.heroContentContainer}>
            <HeroContent />
        </div>
        <div className={styles.pathCardContent}>
          <div className={styles.textWrapper}>
            <motion.div
              className={styles.heroSubText}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
            >
              Building a home is easier than you think. Pick a phase below to get started!
            </motion.div>
          </div>
          <PathCardContent />
        </div>
    </div>
  );
}

export default Hero;
