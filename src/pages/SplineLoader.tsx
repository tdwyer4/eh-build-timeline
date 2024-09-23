import styles from "./SplineLoader.module.css";
import { useRef, useState } from "react";
import { PreSold } from "./PreSold";
import { EarlyConstruction } from "./EarlyConstruction";
import { MidConstruction } from "./MidConstruction";
import { MoveInReady } from "./MoveInReady";

export default function SplineLoader() {
  const [currentContent, setCurrentContent] = useState<string>("Pre");
  const contentRef = useRef<HTMLDivElement | null>(null);

  function handleClick(contentName: string) {
    setCurrentContent(contentName);
    // Scroll to the content section smoothly
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
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
        {/* Here you could replace the Spline scene with your own custom buttons */}
        <div className={styles.customControls}>
          <button onClick={() => handleClick("Pre")}>Pre-Sold</button>
          <button onClick={() => handleClick("Early")}>
            Early Construction
          </button>
          <button onClick={() => handleClick("Mid")}>Mid Construction</button>
          <button onClick={() => handleClick("Ready")}>Move-In Ready</button>
        </div>
      </div>

      <div className={styles.contentSection} ref={contentRef}>
        {renderContent()}
      </div>
    </div>
  );
}
