import { motion } from "framer-motion";
import styles from "./pathCard.module.css";

interface PathCardProps {
  title: string;
  image: string;
  buildTime: string;
  backgroundColor: string;
  onClick: () => void;
}

const PathCard: React.FC<PathCardProps> = ({ image, title, buildTime, backgroundColor, onClick }) => {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div className={`${styles[backgroundColor]} ${styles.btnInfoContainer}`} variants={childVariants}>
      <motion.img src={image} alt={title} className={styles.infoImage} />
      <motion.h3 className={styles.infoHeader}>{title}</motion.h3>
      <motion.div className={styles.infoSub}>
        <p className={styles.infoInfo}>Build Time:</p>
        <p className={styles.infoTime}>{buildTime}</p>
      </motion.div>
      <motion.button
        onClick={onClick}
        className={styles.learnMoreButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
};

export default PathCard;
