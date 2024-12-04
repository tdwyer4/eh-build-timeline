import React, { useRef } from "react";
import styles from "./VidSection.module.css";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Punchout from "../../media/videos/phases/16Punchout.mp4";
import FinalTouches from "../../media/videos/phases/17FinalTouches.mp4";
import { VidSectionHeader } from "./VidSectionHeader";

export const PunchoutVideo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className={styles.vidSliderWrap}>
        <VidSectionHeader
          title="Closing"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        />
        {SLIDES.map((s, idx) => (
          <Slide
            key={s.id}
            slide={s}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
            numItems={s.ni}
          />
        ))}
      </div>
      {/* <div className={styles.screenBuffer} /> */}
    </>
  );
};

interface SlideProps {
  position: number;
  slide: SlideType;
  scrollYProgress: MotionValue;
  numItems: number;
}

const Slide = ({ position, slide, scrollYProgress, numItems }: SlideProps) => {
  const scaleFromPct = (position - 1) / SLIDES.length;
  const y = useTransform(
    scrollYProgress,
    [scaleFromPct, 1],
    [0, -SLIDE_HEIGHT]
  );

  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;
  const mid = (start + end) / 2;

  const opacity = useTransform(scrollYProgress, [start, mid, end], [0.9, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.9]);

  return (
    <motion.div
      style={{
        height: SLIDE_HEIGHT,
        y: position === SLIDES.length ? undefined : y,
      }}
      className={styles.slideContainer}
    >
      <motion.div
        className={styles.slideVideoContainer}
        style={{ opacity, scale }}
      >
        <motion.video
          src={slide.video}
          muted
          autoPlay
          loop={true}
          className={styles.slideVideo}
          style={{
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        ></motion.video>
        <motion.div
          className={styles.slideTextContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.slideHeaderWrap}>
            <h3 className={styles.slideTitle}>{slide.title}</h3>
            <h5 className={styles.slidePhase}>Closing</h5>
          </div>
          <p className={styles.slideParagraph}>{slide.paragraph}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const SLIDE_HEIGHT = 960;

type SlideType = {
  id: number;
  ni: number;
  title: string;
  paragraph: string;
  video: string;
};

const SLIDES: SlideType[] = [
  {
    id: 1,
    ni: 2,
    title: "Punch Out",
    paragraph:
      "This is the very last stage when the finishing touches all come together. This is where the magic is! We're confident saying that no builder in the entire country focuses on the finishing touches more than we do.",
    video: `${Punchout}`,
  },
  {
    id: 1,
    ni: 2,
    title: "Final Touches",
    paragraph:
      "Your home is ready to move in! We'll walk you through the final inspection, hand you the keys, and celebrate your new home with you.",
    video: `${FinalTouches}`,
  },
];
