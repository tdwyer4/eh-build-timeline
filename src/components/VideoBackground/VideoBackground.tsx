import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./videoBackground.module.css";
import CursorSpot from "../CursorSpot/CursorSpot"; // Import the CursorSpot component

function VideoBackground() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoEnd = () => setVideoEnded(true);

  const EES = require("./HeroAnimation2.mp4");
  const PARTICLES = require("./particles2.mp4");

  useEffect(() => {
    const video = document.createElement("video");
    video.src = PARTICLES;
    video.onloadeddata = () => setVideoLoaded(true);
    video.load();
  }, []);

  return (
    <div className={styles.videoContainer}>
      <div className={styles.splineContainer}>
        <video
          src={EES}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          className={`${styles.video} ${videoEnded ? styles.hidden : ""}`}
        />
        {videoLoaded && videoEnded && (
          <>
            <video
              autoPlay
              muted
              loop
              src={PARTICLES}
              className={`${styles.staticImage} ${videoEnded ? styles.fadeIn : ""}`}
            />
            <motion.div
              className={styles.videoOverlay}
              whileInView={{ opacity: 1 }}
            />
          </>
        )}
      </div>

      {/* Conditionally render CursorSpot after the first video ends */}
      {videoEnded && <CursorSpot />}
    </div>
  );
}

export default VideoBackground;
