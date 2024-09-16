import styles from "./SplineLoader.module.css";
import { useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import PreSold from "./PreSold";
import { EarlyConstruction } from "./EarlyConstruction";
import { MidConstruction } from "./MidConstruction";
import { MoveInReady } from "./MoveInReady";

export default function SplineLoader() {
  const [currentContent, setCurrentContent] = useState<string>("Pre");
  const contentRef = useRef<HTMLDivElement | null>(null);

  function onSplineMouseDown(e: { target: { name: string } }) {
    console.log("Clicked target name:", e.target.name); // Debugging log
    if (e.target.name) {
      setCurrentContent(e.target.name);
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
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
        <Spline
          scene="https://prod.spline.design/22smEYy1Sly7sAoz/scene.splinecode"
          onSplineMouseDown={onSplineMouseDown}
        />
      </div>
      <div className={styles.contentSection} ref={contentRef}>
        {renderContent()}
      </div>
    </div>
  );
}
