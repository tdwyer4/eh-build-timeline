import React from "react";
import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
    progress: number;
    offset: number;
};
export function ProgressBar({ progress, offset }: ProgressBarProps) {
    return (
        <div className={styles["push-progressBarWrapper"]}>
            <svg
                className={styles["push-progressBar"]}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 120"
            >
                <circle
                    cx="60"
                    cy="60"
                    r="52" // Radius of the circle
                    className={styles["push-progressBarBackground"]}
                    style={{
                        strokeDashoffset: offset,
                    }} />
                <circle
                    cx="60"
                    cy="60"
                    r="52"
                    className={styles["push-progressBarProgress"]}
                    style={{
                        strokeDashoffset: offset,
                    }} />
            </svg>
            <div className={styles["push-progressLabel"]}>
                {Math.round(progress)}%
            </div>
        </div>);
}
