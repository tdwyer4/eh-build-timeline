import { motion } from "framer-motion";
import styles from "./Cta.module.css";
import GradientType from "../GradientType/gradientType";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CTA: React.FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.backgroundGradients}>
        <div className={styles.radialGradient1}></div>
        <div className={styles.radialGradient2}></div>
      </div>

      <div className={styles.particlesContainer}>
        <ParticlesBackground />
      </div>

      <motion.div
        className={styles.mainContainer}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.contentWrapper}>
          <motion.div className={styles.textContainer} variants={fadeInUp}>
            <GradientType delay={0.5}>Your Dream Home Awaits</GradientType>
            <motion.h2 className={styles.subheading} variants={fadeInUp}>
              Find your perfect space today
            </motion.h2>
            <motion.div className={styles.buttonContainer} variants={fadeInUp}>
              <motion.button className={styles.tealButton} variants={fadeInUp}>
                Explore Homes
              </motion.button>
              <motion.button className={styles.purpleButton} variants={fadeInUp}>
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
