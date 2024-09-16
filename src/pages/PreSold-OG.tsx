import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ParallaxPage.module.css";
import Timeline from "../components/Timeline";
import Carousel from "../components/Carousel";

const IMG_PADDING = 0;

// Abstracted Component for ParallaxContent
const ParallaxContent = ({
  media,
  isVideo,
  subheading,
  heading,
  children, // now optional
}: {
  media: string;
  isVideo?: boolean;
  subheading: string;
  heading: string;
  children?: ReactNode; // marked as optional
}) => (
  <div>
    {/* component content */}
    {children}
  </div>
);

export const PreSoldOG = () => {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollSection}>
        <Carousel />
      </div>
      <div className={styles.scrollSection}>
        <Timeline />
      </div>
      <div className={styles.scrollSection}>
        <ParallaxContent
          media="https://www.executivehomes.com/static/media/EfficiencyDesktopVideo.6b2023a48db712551e9a.mp4"
          isVideo={true}
          subheading="Photos or illustrations of foundational work..."
          heading="Foundations & Rough Trades"
        />
      </div>
      <div className={styles.scrollSection}>
        <ParallaxContent
          media="some_media_url"
          isVideo={true}
          subheading="Some Subheading"
          heading="Some Heading"
        >
          {/* You can pass something or just an empty fragment */}
          <></>
        </ParallaxContent>
      </div>
    </div>
  );
};

// Reusable Scroll Logic
const useParallaxScroll = (offset: [string, string]) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // valid predefined values
  });
  return { targetRef, scrollYProgress };
};

// Sticky Image Component
const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const { targetRef, scrollYProgress } = useParallaxScroll([
    "end end",
    "end start",
  ]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className={styles.stickyImage}
    >
      <motion.div className={styles.overlay} style={{ opacity }} />
    </motion.div>
  );
};

// Overlay Component
const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const { targetRef, scrollYProgress } = useParallaxScroll([
    "start end",
    "end start",
  ]);

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className={styles.targetRefStyle}
    >
      <p className={styles.sectionSubHeading}>{subheading}</p>
      <p className={styles.sectionHeading}>{heading}</p>
    </motion.div>
  );
};

// VideoBox Component
const VideoBox = ({ video }: { video: string }) => {
  const { targetRef, scrollYProgress } = useParallaxScroll([
    "end end",
    "end start",
  ]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.video
      src={video}
      autoPlay
      muted
      style={{
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        scale,
      }}
      ref={targetRef}
      className={styles.videoContainer}
    >
      <motion.div className={styles.overlay} style={{ opacity }} />
    </motion.video>
  );
};
