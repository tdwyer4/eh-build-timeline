import React, { useRef } from "react";
import styles from "./VidSection.module.css";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Framing from "../../media/videos/phases/6Framing.mp4";
import Roofing from "../../media/videos/phases/7Roofing.mp4";

export const FramingVideo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className={styles.vidSliderWrap}>
        {SLIDES.map((s, idx) => (
          <Slide
            key={s.id}
            slide={s}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
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
}

const Slide = ({ position, slide, scrollYProgress }: SlideProps) => {
  const scaleFromPct = (position - 1) / SLIDES.length;
  const y = useTransform(
    scrollYProgress,
    [scaleFromPct, 1],
    [0, -SLIDE_HEIGHT]
  );

  const isOddSlide = position % 2;

  return (
    <motion.div
      style={{
        height: SLIDE_HEIGHT,
        y: position === SLIDES.length ? undefined : y,
        // background: isOddSlide ? "black" : "white",
        // color: isOddSlide ? "white" : "black",
      }}
      className={styles.slideContainer}
    >
      <motion.div
        className={styles.slideVideoContainer}
        initial={{ scale: 0.85, opacity: 1, borderRadius: 24 }}
        whileInView={{ scale: 0.95, opacity: 1, borderRadius: 24 }}
        transition={{ duration: 1 }}
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
          className={styles.slideVideoOverlay}
          whileInView={{ opacity: 0.3 }}
        />
      </motion.div>
      <motion.div className={styles.slideTextContainer}>
        <h3 className={styles.slideTitle}>{slide.title}</h3>
        <p className={styles.slideParagraph}>{slide.paragraph}</p>
      </motion.div>
    </motion.div>
  );
};

const SLIDE_HEIGHT = 960;

type SlideType = {
  id: number;
  title: string;
  paragraph: string;
  video: string;
};

const SLIDES: SlideType[] = [
  {
    id: 1,
    title: "Framing",
    paragraph:
      "Framing is split into several phases. The first step involves standing the walls and setting the ceiling joists. Then, the framers add the rafters that form the roof line. From there, the cornice details are installed and roof is decked. The framers will make a return trip for their punch work after the rough trades are finished.",
    video: `${Framing}`,
  },
  {
    id: 2,
    title: "Roofing",
    paragraph:
      "The roofers arrive once the decking is installed. Our roofing contractor is the best in the area and has roofed thousands of homes. Their expertise during construction, as well as during the warranty after closing, is one of many reasons our homeowners have experienced unmatched new home resale value.",
    video: `${Roofing}`,
  },
];
