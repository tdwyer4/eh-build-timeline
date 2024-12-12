import React from "react";
import { motion } from "framer-motion";
import styles from "./pathCard.module.css";

interface PathCardProps {
  image: string;
  title: string;
  buildTime: string;
  backgroundColor: string;
  onClick: () => void;
}

const PathCard: React.FC<PathCardProps> = ({
  image,
  title,
  buildTime,
  backgroundColor,
  onClick,
}) => {
  return (
    <motion.div
      className={`${styles[backgroundColor]} ${styles.btnInfoContainer}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={styles.imageWrapper}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <img src={image} alt={title} className={styles.infoImage} />
      </motion.div>

      <motion.h3 className={styles.infoHeader}>{title}</motion.h3>
      <motion.p className={styles.infoDescription}>
        This phase represents {title.toLowerCase()} of the construction process. Explore more details by clicking below.
      </motion.p>

      <motion.div className={styles.infoSub}>
        <div className={styles.infoTime}>
        <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
    className={styles.svgIcon} // Ensure styling applies
  >
    <path
      d="M11.5125 3.68856C11.4268 3.14297 11.7998 2.62601 12.3512 2.59499C12.5399 2.58438 12.7298 2.57901 12.9209 2.57901C18.4437 2.57901 22.9209 7.05616 22.9209 12.579C22.9209 17.7905 18.9344 22.0708 13.8445 22.5369C13.7514 22.5455 13.7083 22.6593 13.7745 22.7255C13.9697 22.9207 13.9697 23.2373 13.7745 23.4326C13.5792 23.6278 13.2626 23.6278 13.0673 23.4326L11.5673 21.9326C11.3721 21.7373 11.3721 21.4207 11.5673 21.2255L13.0673 19.7255C13.2626 19.5302 13.5792 19.5302 13.7745 19.7255C13.9697 19.9207 13.9697 20.2373 13.7745 20.4326C13.7364 20.4707 13.7672 20.535 13.8207 20.529C17.8154 20.0819 20.9209 16.6931 20.9209 12.579C20.9209 8.16073 17.3392 4.57901 12.9209 4.57901C12.8345 4.57901 12.7484 4.58038 12.6628 4.58309C12.1107 4.60055 11.5983 4.23415 11.5125 3.68856Z"
      fill="currentColor"
    />
    <path
      d="M7.25689 5.58441C6.90907 5.15541 6.97246 4.52096 7.43395 4.21757C7.75112 4.00905 8.08095 3.81805 8.42206 3.64596C8.91514 3.39719 9.49652 3.65902 9.69456 4.17458C9.8926 4.69014 9.63128 5.26325 9.14463 5.52437C8.99367 5.60536 8.8456 5.69108 8.70059 5.78132C8.23169 6.07312 7.60471 6.01341 7.25689 5.58441Z"
      fill="currentColor"
    />
    <path
      d="M4.51647 9.35267C4.00091 9.15463 3.73908 8.57325 3.98785 8.08017C4.15994 7.73906 4.35094 7.40924 4.55946 7.09206C4.86285 6.63057 5.4973 6.56719 5.9263 6.915C6.3553 7.26282 6.41501 7.88981 6.1232 8.35871C6.03297 8.50371 5.94725 8.65178 5.86626 8.80274C5.60514 9.2894 5.03203 9.55071 4.51647 9.35267Z"
      fill="currentColor"
    />
    <path
      d="M2.9209 12.579C2.9209 12.3879 2.92627 12.198 2.93688 12.0094C2.9679 11.4579 3.48486 11.0849 4.03045 11.1706C4.57604 11.2564 4.94243 11.7689 4.92497 12.3209C4.92226 12.4066 4.9209 12.4926 4.9209 12.579C4.9209 12.6654 4.92226 12.7515 4.92497 12.8372C4.94243 13.3892 4.57604 13.9016 4.03045 13.9874C3.48486 14.0731 2.9679 13.7001 2.93688 13.1487C2.92627 12.96 2.9209 12.7701 2.9209 12.579Z"
      fill="currentColor"
    />
  </svg>
          {buildTime}
        </div>
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
