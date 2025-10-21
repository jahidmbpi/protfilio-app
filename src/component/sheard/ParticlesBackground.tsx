/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10  from-[#0f172a] via-[#1e3a8a] to-[#312e81] animate-gradient">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              push: { quantity: 3 },
              repulse: { distance: 120, duration: 0.6 },
            },
          },
          particles: {
            color: { value: "#93c5fd" },
            links: {
              color: "#60a5fa",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              outModes: { default: "bounce" },
              direction: "none",
              random: false,
              straight: false,
            },
            number: { value: 80, density: { enable: true, area: 800 } },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
            glow: { enable: true, color: "#60a5fa", radius: 8 },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
    </div>
  );
}
