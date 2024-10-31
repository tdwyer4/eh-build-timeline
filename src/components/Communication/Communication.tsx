import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  easeInOut,
} from "framer-motion";
import styles from "./Communication.module.css";
import statusUpdates from "../../media/statusUpdates.png";
import FAQs from "../../media/faqs.png";
import Response from "../../media/response.png";
import Comm from "../../media/communication.png";

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
        We provide extremely detailed updates during every stage of
        construction. Our uniquely streamlined communication means resources are
        allocated to high-end finishes and not time-consuming meetings.
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
          img={statusUpdates}
          heading="Status Updates"
          desc="You'll receive more than 25 detailed status updates filled with info about each stage of construction. The updates will also have estimated closing dates so you can plan your move. "
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={2}
          numItems={4}
          img={FAQs}
          heading="FAQ Database"
          desc="You'll have access to an FAQ database that's filled with answers to most any questions you might have during construction. It's the go-to-resource when you visit the home during construction! "
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={3}
          numItems={4}
          img={Response}
          heading="Fast Response Times"
          desc="If the status updates and FAQ database don't do the trick, our team will be happy to provide nearly immediate responses. Our average email response during business hours is less than 30 minutes! "
        />
        <CarouselItem
          scrollYProgress={scrollYProgress}
          position={4}
          numItems={4}
          img={Comm}
          heading="Streamlined Communication"
          desc="We always communicate by email to ensure every detail in your home is implemented in the most efficient way possible. Emails also allow you to communicate when convenient for you and reference anything at any time! "
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
  img,
}: {
  scrollYProgress: MotionValue<number>;
  position: number;
  numItems: number;
  heading: string;
  desc: string;
  img: string;
}) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      initial={{ y: 200 }}
      whileInView={{ opacity: 1, y: 50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={styles.vertCarouselCard}
    >
      <div className={styles.imageContainer}>
        <img src={img} className={styles.image} />
      </div>
      <span className={styles.vertCarouselInner}>
        <div className={styles.vertCarouselInnerHeading}>{heading}</div>
        <div className={styles.vertCarouselInnerDesc}>{desc}</div>
      </span>
    </motion.div>
  );
};

const Gradient = () => <div className={styles.gradientFade} />;

const Buffer = () => <div className={styles.bufferWrap} />;
