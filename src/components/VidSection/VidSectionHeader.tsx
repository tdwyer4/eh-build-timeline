import styles from "./VidSection.module.css";
import { motion } from "framer-motion";
import GlowBG from "../../media/glowBG.png";
import { type } from "os";
import { title } from "process";

type vidSectionHeaderProps = {
  title: string;
  description: string;
};

export const VidSectionHeader = (props: vidSectionHeaderProps) => {
  return (
    <motion.div className={styles.fixedHeaderContainer}>
      <motion.div className={styles.fixedHeader}>
        {/* <motion.img
              src={GlowBG}
              className={styles.glowBG}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              transition={{ duration: 1, ease: "easeIn" }}
            /> */}
        <motion.p
          className={styles.fixedHeaderPhase}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        ></motion.p>
        <motion.p
          className={styles.fixedHeaderSub}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          {props.title}
        </motion.p>
        <motion.p
          className={styles.fixedHeaderTime}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
        >
          {props.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
