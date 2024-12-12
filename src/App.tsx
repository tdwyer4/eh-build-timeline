import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import PreSold from "./pages/PreSold";
import VideoBackground from "./components/VideoBackground/VideoBackground";

function App() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  return (
    <>
      <VideoBackground />
      {!selectedPhase ? (
        <Hero onPhaseSelect={(title) => setSelectedPhase(title)} />
      ) : (
        <PreSold pageTitle={selectedPhase} />
      )}
    </>
  );
}

export default App;


