import React from "react";
import "./HomePage.css";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

function HomePage() {
  return (
    <div className="mainContainer">
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default HomePage;
