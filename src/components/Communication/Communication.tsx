import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  easeInOut,
} from "framer-motion";
import styles from "./Communication.module.css";

export const Communication = () => {
  return (
    <>
      <div className={styles.wrapWrap}>
        <Features />
      </div>

      <div className={styles.pagePosition} />
    </>
  );
};

const Features = () => {
  return (
    <div className={styles.featureWrap}>
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  return (
    <div className={styles.copyContainer}>
      {/* <span className={styles.headerTag}>Lorem ipsum dolor</span> */}
      <h2 className={styles.header}>Communication every step of the way</h2>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur. Dolor quis a leo lobortis orci
        tortor eget. Enim proin aliquam nulla a lacus pellentesque quam in. Nec
        vel vel nulla nunc vel in molestie proin convallis. Leo et vulputate
        tincidunt justo a varius et elementum.
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "100% 0%"],
  });

  return (
    <div className={styles.vertCarouselWrap}>
      <Gradient />

      <div ref={ref} className={styles.vertCarouselItems}>
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={1}
          numItems={4}
          heading="Regular updates at every phase"
          desc="Description1"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={4}
          heading="Access to hundreds of FAQs"
          desc="Description2"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={3}
          numItems={4}
          heading="30 minute average response time"
          desc="Description3"
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={4}
          numItems={4}
          heading="no gimmicks. quality guaranteed."
          desc="Description4"
        />
      </div>

      <Buffer />
    </div>
  );
};

const CarouselItem = ({
  scrollYProgress,
  position,
  numItems,
  heading,
  desc,
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  heading: string;
  desc: string;
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      initial={{ y: 200 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={styles.vertCarouselCard}
    >
      <span className={styles.vertCarouselInner}>
        <div className={styles.vertCarouselInnerHeading}>{heading}</div>
        <div className={styles.vertCarouselInnerDesc}>{desc}</div>
      </span>
    </motion.div>
  );
};

const Gradient = () => <div className={styles.gradientFade} />;

const Buffer = () => <div className={styles.bufferWrap} />;
