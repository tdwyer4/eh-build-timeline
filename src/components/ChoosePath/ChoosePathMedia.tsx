import React, { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./ChoosePath.module.css";

type Props = {
  children: React.ReactNode;
  src: string;
};

export const PathMedia = ({ children, src }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const mediaInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const pathImgStyles = [
    styles.pathMedia,
    mediaInView ? styles.active : styles.inactive,
  ];

  return (
    <div ref={ref} className={pathImgStyles.join(" ")}>
      <img src={src} />
    </div>
  );
};
