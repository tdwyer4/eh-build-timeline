// src/components/ParticlesBackground/ParticlesBackground.tsx
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container, ISourceOptions } from "@tsparticles/engine";
import styles from "./ParticleBG.module.css"; // Ensure this path is correct

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  // Initialize the tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the slim version for optimized performance
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles container loaded", container);
  };

  // Memoize particle options for better performance
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#293139", // Dark navy background
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#76D5D8" },
        links: {
          color: "#76D5D8",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 0.05,
        },
        move: {
          direction: "none",
          enable: true,
          speed: 3,
          outModes: { default: "bounce" },
        },
        number: {
          density: { enable: true, value_area: 800 },
          value: 300,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options} // Use in-code options for particles configuration
        className={styles.particlesBackground} // Apply styles to the particle background
      />
    );
  }

  return null; // Return nothing until particles are initialized
};

export default ParticlesBackground;
