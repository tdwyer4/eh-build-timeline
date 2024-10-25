import React, { useRef } from "react";
import styles from "./VidSection.module.css";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Video from "../../media/Pad.mp4";

export const VidSection = ({
  video,
  header1,
  description1,
  header2,
  description2,
  header3,
  description3,
  header4,
  description4,
}: {
  video: string;
  header1: string;
  description1: string;
  header2: string;
  description2: string;
  header3: string;
  description3: string;
  header4: string;
  description4: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end center"],
  });
  return (
    <motion.div className={styles.mainContainer}>
      <VideoHolder video={video} />
      <div ref={ref} className={styles.textScrollContainer}>
        <TextHolder
          scrollYProgress={scrollYProgress}
          position={1}
          numItems={4}
          header={header1}
          description={description1}
        />
        <TextHolder
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={4}
          header={header2}
          description={description2}
        />
        <TextHolder
          scrollYProgress={scrollYProgress}
          position={3}
          numItems={4}
          header={header3}
          description={description3}
        />
        <TextHolder
          scrollYProgress={scrollYProgress}
          position={4}
          numItems={4}
          header={header4}
          description={description4}
        />
      </div>
      <ScrollBuffer />
    </motion.div>
  );
};

const VideoHolder = ({ video }: { video: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, y: 0, scale: 1, borderRadius: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 0.95, borderRadius: 24 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        exit={{ scale: 1, borderRadius: 0 }}
        ref={targetRef}
        className={styles.videoContainer}
      >
        <motion.video
          src={video}
          muted
          autoPlay
          loop={true}
          style={{
            height: "100vh",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        ></motion.video>
        <motion.div
          className={styles.videoOpacity}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ duration: 2 }}
          exit={{ opacity: 0 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

const TextHolder = ({
  scrollYProgress,
  position,
  numItems,
  header,
  description,
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  header: string;
  description: string;
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const y = useTransform(scrollYProgress, [start, end], [0, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
      className={styles.textHolder}
      style={{}}
    >
      <h1 className={styles.videoHeader}>{header}</h1>
      <p className={styles.videoDescription}>{description}</p>
    </motion.div>
  );
};

const ScrollBuffer = () => {
  return <div className={styles.scrollBuffer} />;
};
