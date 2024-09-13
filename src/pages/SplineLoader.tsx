import styles from "./SplineLoader.module.css";
import React, { useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import PreSold from "./PreSold";
import { EarlyConstruction } from "./EarlyConstruction";
import { MidConstruction } from "./MidConstruction";
import { MoveInReady } from "./MoveInReady";

export default function SplineLoader() {
  const [currentContent, setCurrentContent] = useState<string>("Pre");
  const contentRef = useRef<HTMLDivElement | null>(null);

  function onSplineMouseDown(e: { target: { name: string } }) {
    if (e.target.name) {
      setCurrentContent(e.target.name);
      // Delay scrolling to allow content to update
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }

  const renderContent = () => {
    switch (currentContent) {
      case "Early":
        return <EarlyConstruction />;
      case "Mid":
        return <MidConstruction />;
      case "Ready":
        return <MoveInReady />;
      case "Pre":
      default:
        return <PreSold />;
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.splineContainer}>
        <Spline
          scene="https://prod.spline.design/kO-B88qC425jQ-Ne/scene.splinecode"
          onSplineMouseDown={onSplineMouseDown}
        />
      </div>
      <div className={styles.contentSection} ref={contentRef}>
        {renderContent()}
      </div>
    </div>
  );
}
