import React, { useEffect, useState } from "react";
import styles from "./cursorSpot.module.css";

const CursorSpot: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={styles.spotlight}
      style={{
        "--cursor-x": `${cursorPos.x}px`,
        "--cursor-y": `${cursorPos.y}px`,
      } as React.CSSProperties}
    />
  );
};

export default CursorSpot;
