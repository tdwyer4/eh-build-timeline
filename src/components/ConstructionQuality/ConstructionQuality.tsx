import { useRef, useState } from "react";
import styles from "./ConstructionQuality.module.css";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import CQ1 from "../../media/CQ-1.png";
import CQ2 from "../../media/CQ-2.png";
import CQ3 from "../../media/CQ-3.png";
import CQ4 from "../../media/CQ-4.png";
import CQFrame from "../../media/CQ-Frame.png";

const ConstructionQuality = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end start", "end end"],
  });

  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div ref={targetRef} className={styles.cqMainWrap}>
      <Videos
        content={CQitems}
        scrollYProgress={scrollYProgress}
        activeId={activeId}
      />
      <Content content={CQitems} setActiveId={setActiveId} />
    </div>
  );
};

const Content = ({
  content,
  setActiveId,
}: {
  content: typeof CQitems;
  setActiveId: (id: number) => void;
}) => {
  return (
    <div className={styles.contentContainer}>
      {[...content].map(({ id, title, desc }) => (
        <motion.div
          key={id}
          className={styles.textContainer}
          onViewportEnter={() => setActiveId(id)}
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
  activeId,
}: {
  content: typeof CQitems;
  scrollYProgress: MotionValue<number>;
  activeId: number | null;
}) => {
  const top = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const activeContent = content.find((item) => item.id === activeId);

  return (
    <div className={styles.videoContainer}>
      <motion.img className={styles.imgPhoneFrame} src={CQFrame} />
      <motion.div style={{ top }} className={styles.videoPosition}>
        <AnimatePresence>
          {activeContent && (
            <motion.img
              key={activeContent.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.video}
              src={activeContent.img}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ConstructionQuality;

const CQitems = [
  {
    id: 1,
    title: "One-of-a-Kind Efficiency",
    desc: "Every detail of construction is managed through our custom-built Executive Homes app. It's a system unlike any other!",
    img: `${CQ1}`,
  },
  {
    id: 2,
    title: "Guaranteed Quality",
    desc: "Instead of generalized info, each home's checklist is automatically tailored to the exact features in your home. Our team is checking exactly what needs to be checked, when it needs to be checked.",
    img: `${CQ2}`,
  },
  {
    id: 3,
    title: "Automated Scheduling",
    desc: "Every contractor is automatically scheduled to optimize the most efficient flow of construction. With scheduling automatically handled by our system, our team is freed up to spend all their time focusing on quality!",
    img: `${CQ3}`,
  },
  {
    id: 4,
    title: "Constant Monitoring",
    desc: "Our system monitors every detail of construction to provide real-time alerts to ensure your home's schedule stays on track and quality meets the guaranteed standards in your Purchase Agreement.",
    img: `${CQ4}`,
  },
];
