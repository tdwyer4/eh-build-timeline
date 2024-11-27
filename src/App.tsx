import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import VideoBackground from "./components/VideoBackground/VideoBackground"; 
import PreSold from "./pages/PreSold";

function App() {
  return (
      <>
        <VideoBackground />
        <PreSold />
      </>
  );
}

export default App;

