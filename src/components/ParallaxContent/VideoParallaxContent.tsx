import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import OverlayCopy from "../ParallaxSubContent/OverlayCopy";
import VideoBox from "../ParallaxSubContent/VideoBox";
import styles from "./ParallaxContent.module.css";

const IMG_PADDING = 0;

const VideoParallaxContent = ({
  video,
  subheading,
  heading,
  children,
}: {
  video: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
        background: "#293139",
      }}
    >
      <div className={styles.parallaxStyling}>
        <VideoBox video={video} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

export default VideoParallaxContent;
