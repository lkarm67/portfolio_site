"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  speed: number;
  phase: number;
};

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const particles: Particle[] = [];
    let time = 0;

    const COUNT = 120;

    function init() {
      particles.length = 0;

      for (let i = 0; i < COUNT; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;

        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 0.3 + 0.1,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init();
    }

    resize();
    window.addEventListener("resize", resize);

    function drawBackground() {
      const gradient = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        Math.max(w, h)
      );

      gradient.addColorStop(0, "#3a0a1e"); // вишневий центр
      gradient.addColorStop(0.5, "#1a050f"); // темніше
      gradient.addColorStop(1, "#070208"); // майже чорний

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    }

    function draw() {
      time += 0.01;

      drawBackground();

      for (const p of particles) {
        const floatX = Math.sin(time * p.speed + p.phase) * 8;
        const floatY = Math.cos(time * p.speed + p.phase) * 8;

        const x = p.baseX + floatX;
        const y = p.baseY + floatY;

        const pulse = Math.sin(time * 2 + p.phase) * 0.3 + 1;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 180, 210, ${p.opacity})`;

        ctx.arc(x, y, p.size * pulse, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}