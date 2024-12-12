// components/TextParallaxContent.tsx
import React, { ReactNode } from "react";
import StickyImage from "../ParallaxSubContent/StickyImage";
import OverlayCopy from "../ParallaxSubContent/OverlayCopy";
import styles from "./ParallaxContent.module.css";

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div className={styles.parallaxStyling}>
      <StickyImage imgUrl={imgUrl} />
      <OverlayCopy heading={heading} subheading={subheading} />
      {children}
    </div>
  );
};

export default TextParallaxContent;
