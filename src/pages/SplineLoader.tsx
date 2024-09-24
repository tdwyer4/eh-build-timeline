import styles from "./SplineLoader.module.css";
import { useRef, useState, useEffect, startTransition } from "react";
import { PreSold } from "./PreSold";
import { EarlyConstruction } from "./EarlyConstruction";
import { MidConstruction } from "./MidConstruction";
import { MoveInReady } from "./MoveInReady";
import SplineHero from "./SplineHero";

export default function SplineLoader() {
  const [currentContent, setCurrentContent] = useState<string>("Pre");
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  // Handle mouse movement to update gradient position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
      const mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

      setGradientPosition({
        x: mouseXpercentage,
        y: mouseYpercentage,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleClick(contentName: string) {
    startTransition(() => {
      setCurrentContent(contentName);
    });

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

  const gradientStyle = {
    background: `radial-gradient(at ${gradientPosition.x}% ${gradientPosition.y}%, #76D5D8, #293139)`,
  };

  return (
    <div className={styles.appContainer} style={gradientStyle}>
      <div className={styles.splineContainer}>
        <SplineHero /> {/* Your 3D component */}
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
