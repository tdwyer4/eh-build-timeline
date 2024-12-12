import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./ChoosePath.module.css";
import { ReactLenis } from "lenis/dist/lenis-react";
import FPVideo from "../../media/floorplans.mp4";
import PLVideo from "../../media/lots.mp4";

const ChoosePath = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <section ref={targetRef} className={styles.mainWrap}>
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            //   infinite: true,
            //   syncTouch: true,
          }}
        >
          <Content content={items} />
          <Images content={items} scrollYProgress={scrollYProgress} />
        </ReactLenis>
      </section>
    </>
  );
};

const Content = ({ content }: { content: typeof items }) => {
  return (
    <div className={styles.contentWrap}>
      {content.map(({ id, title, description }, idx) => (
        <div
          key={id}
          className={`${styles.contentContainer} ${
            idx % 2 ? styles.textContainer2 : styles.textContainer1
          }`}
        >
          <span className={styles.contentTitleText}>{title}</span>
          <span className={styles.contentDescText}>{description}</span>
        </div>
      ))}
    </div>
  );
};

const Images = ({
  content,
  scrollYProgress,
}: {
  content: typeof items;
  scrollYProgress: MotionValue<number>;
}) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  );

  return (
    <div className={styles.imageContainer}>
      <motion.div style={{ top }} className={styles.imagePosition}>
        {[...content].reverse().map(({ video, id, title }) => (
          <video key={id} className={styles.image} src={video} muted autoPlay />
        ))}
      </motion.div>
    </div>
  );
};

export default ChoosePath;

const items = [
  {
    id: 1,
    title: "Pick A Lot",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    video: `${PLVideo}`,
  },
  {
    id: 2,
    title: "Choose A Floorplan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    video: `${FPVideo}`,
  },
];
