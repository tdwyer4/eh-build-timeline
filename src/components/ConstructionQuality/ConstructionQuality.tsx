import { useRef } from "react";
import styles from "./ConstructionQuality.module.css";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Vid1 from "../../media/checklist-dark.mp4";
import Vid2 from "../../media/Framing.mp4";
import Vid3 from "../../media/lots.mp4";

const ConstructionQuality = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <div ref={targetRef} className={styles.cqMainWrap}>
      <Videos content={CQitems} scrollYProgress={scrollYProgress} />
      <Content content={CQitems} />
    </div>
  );
};

const Content = ({ content }: { content: typeof CQitems }) => {
  return (
    <div className={styles.contentContainer}>
      {[...content].map(({ id, title, desc }) => (
        <motion.div
          key={id}
          className={styles.textContainer}
          initial={{ opacity: 0, y: 250 }}
          whileInView={{ opacity: 1, y: 50 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.contentTitle}>{title}</div>
          <div className={styles.contentDesc}>{desc}</div>
        </motion.div>
      ))}
    </div>
  );
};

const Videos = ({
  content,
  scrollYProgress,
}: {
  content: typeof CQitems;
  scrollYProgress: MotionValue<number>;
}) => {
  const top = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className={styles.videoContainer}>
      <motion.div style={{ top }} className={styles.videoPosition}>
        {[...content].map(({ id, video }, idx) => (
          <motion.video
            key={id}
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.video}
            src={video}
            muted
            autoPlay
            loop={true}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ConstructionQuality;

const CQitems = [
  {
    id: 1,
    title: "App Checklists to stay on track",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    video: `${Vid1}`,
  },
  {
    id: 2,
    title: "Automated Cut Sheets",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    video: `${Vid1}`,
  },
  {
    id: 3,
    title: "Unmatched Quality Assurance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    video: `${Vid3}`,
  },
];
