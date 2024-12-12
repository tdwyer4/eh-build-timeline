import React, { useRef, useState } from "react";
import styles from "./VidSection.module.css";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import TopOut from "../../media/videos/phases/8TopOut.mp4";
import HVACRough from "../../media/videos/phases/9HVACRough.mp4";
import ElectricRough from "../../media/videos/phases/10ElectricRough.mp4";
import { VidSectionHeader } from "./VidSectionHeader";
import { SectionHeader } from "../SectionHeaderText/SectionHeaderText";

export const RoughVideo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className={styles.vidSliderWrap}>
        <SectionHeader
          title="Rough Trades"
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
    ni: 3,
    title: "Plumbing Top Out",
    paragraph:
      "For the plumbers, this is their second trip to the home and is a stage referred to as the plumbing “top out.” This is when the water lines and pipes to the various fixtures and showers are installed. The plumbers will return again shortly before closing to install the fixtures.",
    video: `${TopOut}`,
  },
  {
    id: 2,
    ni: 3,
    title: "HVAC Rough",
    paragraph:
      "This stage is when the furnace and ducts are installed. The HVAC system for each home is specifically designed through a J-Calc completed by a third-party energy company. The system is also tested by an energy rating company to ensure the ducts have less than 4% leakage (compared to 15-25% in non-certified homes!",
    video: `${HVACRough}`,
  },
  {
    id: 3,
    ni: 3,
    title: "Electric Rough",
    paragraph:
      "Now it's the electrician's turn. At this stage, wiring for fixtures, can lights, recepts, and other features are run throughout the home. The electricians will return later during the fixtures stage to finalize their work. We offer an on-site electric consultation as an upgrade for those who want to personalize their electric locations and features.",
    video: `${ElectricRough}`,
  },
];
