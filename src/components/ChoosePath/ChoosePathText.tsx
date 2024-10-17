import React, { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./ChoosePath.module.css";

type Props = {
  children: React.ReactNode;
};

export const PathText = ({ children }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const pathTextStyles = [
    styles.pathText,
    isInView ? styles.active : styles.inactive,
  ];

  return (
    <p ref={ref} className={pathTextStyles.join(" ")}>
      {children}
    </p>
  );
};
