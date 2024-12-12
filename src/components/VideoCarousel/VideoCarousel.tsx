import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, MotionValue, useMotionValue } from "framer-motion";
import styles from "./VideoCarousel.module.css";
import Pad from "../../media/videos/phases/1Pad.mp4";
import RoughPlumbing from "../../media/videos/phases/2RoughPlumbing.mp4";
import PostTension from "../../media/videos/phases/3PostTension.mp4";
import Termite from "../../media/videos/phases/4Termite.mp4";
import Slab from "../../media/videos/phases/5Slab.mp4";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

export const VideoCarousel = () => {
  const [videoIndex, setVideoIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setVideoIndex((pv) => {
          if (pv === videos.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && videoIndex < videos.length - 1) {
      setVideoIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && videoIndex > 0) {
      setVideoIndex((pv) => pv - 1);
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${videoIndex * 100}%`,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onDragEnd={onDragEnd}
        className={styles.cursorContainer}
      >
        <Images videoIndex={videoIndex} />
      </motion.div>

      <Dots videoIndex={videoIndex} setVideoIndex={setVideoIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ videoIndex }: { videoIndex: number }) => {
  return (
    <>
      {videos.map(({ title, paragraph, video }, idx) => {
        return (
          <motion.div style={{}} className={styles.slideContainer}>
            <motion.div
              className={styles.slideVideoContainer}
              initial={{ scale: 0.85, opacity: 1, borderRadius: 24 }}
              whileInView={{ scale: 0.95, opacity: 1, borderRadius: 24 }}
              transition={{ duration: 1 }}
            >
              <motion.video
                src={video}
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
                animate={{ scale: videoIndex === idx ? 0.95 : 0.9 }}
                transition={{ duration: 1 }}
              ></motion.video>
              <motion.div
                className={styles.slideVideoOverlay}
                whileInView={{ opacity: 0.4 }}
                animate={{ scale: videoIndex === idx ? 0.95 : 0.9 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
            <motion.div className={styles.slideTextContainer}>
              <h3 className={styles.slideTitle}>{title}</h3>
              <p className={styles.slideParagraph}>{paragraph}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({
  videoIndex,
  setVideoIndex,
}: {
  videoIndex: number;
  setVideoIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className={styles.navContainer}>
      {videos.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setVideoIndex(idx)}
            className={`${styles.navDot} ${
              idx === videoIndex
                ? `${styles.navDotActive}`
                : `${styles.navDotInactive}`
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};

const VIDEO_HEIGHT = 960;
const VIDEO_WIDTH = 540;

const videos = [
  {
    title: "Footings",
    paragraph:
      "The footing is the perimeter foundation and is the first step after the dirt pad is built. You'll notice rebar extending up from the footing - this rebar is tied into the slab concrete to anchor your home into the ground. ",
    video: `${Pad}`,
  },
  {
    title: "Rough Plumbing",
    paragraph:
      "The plumbers first visit to the home is call the Rough Plumbing phase. This is when the drain pipes and water lines are run. Our team uses laser levels to ensure everything is properly installed. ",
    video: `${RoughPlumbing}`,
  },
  {
    title: "Post-Tension Cables",
    paragraph:
      "Every Executive home features post-tension cables that are engineered precisely for each layout. The post-tension cables bind the concrete together and provide the home with incredible tensile strength. ",
    video: `${PostTension}`,
  },
  {
    title: "Termite Treatment",
    paragraph:
      "A termite treatment will be applied before the slab is poured. The treatment comes with a 5-year warranty for extra peace of mind!",
    video: `${Termite}`,
  },
  {
    title: "Slab",
    paragraph:
      "Once the internal systems are in place, the slab is backfilled and concrete is poured. Framing is up next!.",
    video: `${Slab}`,
  },
];
