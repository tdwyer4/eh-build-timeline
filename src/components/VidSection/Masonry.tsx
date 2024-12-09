import React, { useRef, useState } from "react";
import styles from "./VidSection.module.css";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Masonry from "../../media/videos/phases/13Masonry.mp4";
import Paint from "../../media/videos/phases/14Paint.mp4";
import Grading from "../../media/videos/phases/15Grading.mp4";
import { VidSectionHeader } from "./VidSectionHeader";
import { SectionHeader } from "../SectionHeaderText/SectionHeaderText";

export const MasonryVideo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className={styles.vidSliderWrap}>
        <SectionHeader
          title="Exterior Finishes"
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

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

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const currentTime = video.currentTime;
      const duration = video.duration;
      setProgress((currentTime / duration) * 100);
    }
  };

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
          ref={videoRef}
          src={slide.video}
          muted
          autoPlay
          loop={true}
          onTimeUpdate={handleTimeUpdate}
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
          exit={{ opacity: 0 }}
        >
          <div className={styles.slideContentsContainer}>
            <div className={styles.slideHeaderWrap}>
              <h3 className={styles.slideTitle}>{slide.title}</h3>
              <div className={styles.progressBarWrapper}>
                <motion.div
                  className={styles.progressBar}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{
                    type: "tween",
                  }}
                />
              </div>
            </div>

            <p className={styles.slideParagraph}>{slide.paragraph}</p>
          </div>
          <div></div>
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
    title: "Masonry",
    paragraph:
      "Each of our homes features full masonry below the plate line. We have dozens of premium brick and stone options to choose from to personalize your home. The skilled masons place each brick and stone by hand, making your home truly one of a kind! ",
    video: `${Masonry}`,
  },
  {
    id: 2,
    ni: 2,
    title: "Grading",
    paragraph:
      "The yard is graded in two stages - rough grade and final grade. During each stage, the yard is laser leveled to ensure proper grades and swales are established to protect the foundation. We also offer underground drains at our exact cost for those wanting upgraded drainage.",
    video: `${Grading}`,
  },
];
