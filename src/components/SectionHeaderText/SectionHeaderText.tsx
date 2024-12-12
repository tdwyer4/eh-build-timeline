import styles from "./SectionHeaderText.module.css";
import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  description: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <motion.div className={styles.sectionHeaderContainer}>
      <motion.div className={styles.sectionHeader}>
        <motion.p
          className={styles.sectionHeaderTitle}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          {props.title}
        </motion.p>
        <motion.p
          className={styles.sectionHeaderDescription}
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
