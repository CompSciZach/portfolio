import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        background: {
          color: "#111",
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 1000,
            },
          },
          color: {
            value: "#ffaa00",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0,
          },
          size: {
            value: 2,
            random: false,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
          links: {
            enable: true,
            distance: 120,
            color: {
              value: "#ffaa00",
            },
            opacity: 0.5,
            width: 2,
            triangles: {
              enable: false, // ❌ no random triangles filling
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false,
            },
            onClick: {
              enable: false,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}
