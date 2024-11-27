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
  return (
    <motion.div
      className={`${styles[backgroundColor]} ${styles.btnInfoContainer}`}
      whileTap={{ scale: 0.5 }}
    >
      <img src={image} alt={title} className={styles.infoImage} />  
      <h3 className={styles.infoHeader}>{title}</h3>
      <div className={styles.infoSub}>
        <p className={styles.infoInfo}>Build Time:</p>
        <p className={styles.infoTime}>{buildTime}</p>
      </div>
      <motion.button onClick={onClick}>
        Learn More
      </motion.button>
    </motion.div>
  );
};

export default PathCard;
