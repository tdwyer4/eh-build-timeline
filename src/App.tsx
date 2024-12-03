import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import VideoBackground from "./components/VideoBackground/VideoBackground"; 
import CTA from "./components/Cta/Cta";

function App() {
  return (
      <>
        <VideoBackground />
        <CTA />
      </>
  );
}

export default App;

