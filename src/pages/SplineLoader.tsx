import styles from "./SplineLoader.module.css";
import { useRef, useState, useEffect, startTransition } from "react";
import { motion } from "framer-motion";
import { PreSold } from "./PreSold";
import { EarlyConstruction } from "./EarlyConstruction";
import { MidConstruction } from "./MidConstruction";
import { MoveInReady } from "./MoveInReady";
import Manifest from "../components/Manifest/Manifest";
import HeroVideo from "../media/EH-GlowLogo-Hero.mp4";
import HeroImage from "../media/EH-GlowLogo-Hero.png";

export default function SplineLoader() {
  const [currentContent, setCurrentContent] = useState<string>("Pre");
  const [videoEnded, setVideoEnded] = useState(false); // Track if video has ended
  const [imageLoaded, setImageLoaded] = useState(false); // Track if the image is preloaded
  const contentRef = useRef<HTMLDivElement | null>(null);

  function handleClick(contentName: string) {
    startTransition(() => {
      setCurrentContent(contentName);
    });

    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  // Preload image before the video ends
  useEffect(() => {
    const img = new Image();
    img.src = HeroImage; // Use the imported HeroImage
    img.onload = () => setImageLoaded(true); // Set when image is fully loaded
  }, []);

  // Handle video end event
  function handleVideoEnd() {
    setVideoEnded(true);
  }

  const renderContent = () => {
    switch (currentContent) {
      case "Pre":
      default:
        return <PreSold />;
      case "Early":
        return <EarlyConstruction />;
      case "Mid":
        return <MidConstruction />;
      case "Ready":
        return <MoveInReady />;
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.splineContainer}>
        <video
          src={HeroVideo}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          className={`${styles.video} ${videoEnded ? styles.hidden : ""}`} // Add a hidden class after video ends
        />
        {imageLoaded &&
          videoEnded && ( // Only show image after video ends and image is loaded
            <img
              src={HeroImage}
              alt="Static background"
              className={`${styles.staticImage} ${
                videoEnded ? styles.fadeIn : ""
              }`} // Add fade-in effect
            />
          )}

        <div className={styles.manifestContainer}>
          <Manifest />
        </div>

        <motion.div
          className={styles.customControls}
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.7, ease: "easeOut" }}
        >
          <button onClick={() => handleClick("Pre")}>Pre-Sold</button>
          <button onClick={() => handleClick("Early")}>
            Early Construction
          </button>
          <button onClick={() => handleClick("Mid")}>Mid Construction</button>
          <button onClick={() => handleClick("Ready")}>Move-In Ready</button>
        </motion.div>
      </div>

      <div className={styles.contentSection} ref={contentRef}>
        {renderContent()}
      </div>
    </div>
  );
}
