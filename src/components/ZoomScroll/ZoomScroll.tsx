import styles from "./ZoomScroll.module.css";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Layer1 from "../../media/layers/1.png";
import Layer2 from "../../media/layers/2.png";
import Layer3 from "../../media/layers/3.png";
import Layer4 from "../../media/layers/4.png";
import Layer5 from "../../media/layers/5.png";
import Layer6 from "../../media/layers/6.png";
import Layer7 from "../../media/layers/7.png";

export default function ZoomScroll() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);

  const layers = [
    {
      src: Layer1,
      scale: scale4,
    },
    {
      src: Layer2,
      scale: scale5,
    },
    {
      src: Layer3,
      scale: scale6,
    },
    {
      src: Layer4,
      scale: scale7,
    },
    {
      src: Layer5,
      scale: scale8,
    },
    {
      src: Layer6,
      scale: scale5,
    },
    {
      src: Layer7,
      scale: scale7,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {layers.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <img src={src} alt="image" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
