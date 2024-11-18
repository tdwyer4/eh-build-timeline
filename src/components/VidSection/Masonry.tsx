import React, { useRef } from "react";
import styles from "./VidSection.module.css";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Masonry from "../../media/videos/phases/13Masonry.mp4";
import Paint from "../../media/videos/phases/14Paint.mp4";
import Grading from "../../media/videos/phases/15Grading.mp4";

export const MasonryVideo = () => {
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
    title: "Masonry",
    paragraph:
      "Each of our homes features full masonry below the plate line. We have dozens of premium brick and stone options to choose from to personalize your home. The skilled masons place each brick and stone by hand, making your home truly one of a kind! ",
    video: `${Masonry}`,
  },
  {
    id: 2,
    title: "Paint",
    paragraph:
      "Painting involves much more than paint. The painters start by caulking the cabinets and trim, then move to sanding the cabinets and doors, and then tape off areas of the home. Then they're ready to paint!",
    video: `${Paint}`,
  },
  {
    id: 3,
    title: "Grading",
    paragraph:
      "The yard is graded in two stages - rough grade and final grade. During each stage, the yard is laser leveled to ensure proper grades and swales are established to protect the foundation. We also offer underground drains at our exact cost for those wanting upgraded drainage.",
    video: `${Grading}`,
  },
];
