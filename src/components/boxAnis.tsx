import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import styles from "./boxAnis.module.css";

const boxVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const BoxAnis = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className={styles.box}
      ref={ref}
      variants={boxVariants}
      initial="hidden"
      animate={control}
    >
      <p>Your content</p>
    </motion.div>
  );
};

export default BoxAnis;
