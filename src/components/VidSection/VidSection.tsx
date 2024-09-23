import React, { ReactNode } from "react";
import styles from "./VidSection.module.css";

const VidSection = () => {
  return (
    <div className={styles.vidMainContainer}>
      {/* Example of multiple sections */}
      <div className={styles.vidSubContainer}>
        <ParallaxContent
          media="https://www.executivehomes.com/static/media/EfficiencyDesktopVideo.6b2023a48db712551e9a.mp4"
          isVideo={true}
        />
      </div>
    </div>
  );
};

const IMG_PADDING = 0;

// Abstracted Component for ParallaxContent
const ParallaxContent = ({
  media,
  isVideo,
  children, // now optional
}: {
  media: string;
  isVideo?: boolean;
  children?: ReactNode; // marked as optional
}) => (
  <div>
    {isVideo ? <VideoBox video={media} /> : null}
    {children}
  </div>
);

// VideoBox Component
const VideoBox = ({ video }: { video: string }) => {
  return (
    <video
      src={video}
      autoPlay
      muted
      loop
      style={{
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        width: "100%",
        objectFit: "cover",
      }}
      className={styles.videoContainer}
    ></video>
  );
};

export default VidSection;
