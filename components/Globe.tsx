"use client";

import { useEffect, useRef } from "react";
import type { City } from "@/lib/types";

/**
 * The network globe — a slow, wireframe rotation with the agency's cities
 * marked. Pure canvas, no dependency, ~2kb of logic. It pauses when scrolled
 * out of view and respects prefers-reduced-motion (renders a single static
 * frame), so it never costs battery for motion nobody is watching.
 */
export function Globe({ cities }: { cities: City[] }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const R = W * 0.4;
    const D = Math.PI / 180;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let rot = 0;
    let raf = 0;
    let running = true;

    const proj = (lat: number, lon: number) => {
      const p = lat * D;
      const l = lon * D + rot;
      return { x: Math.cos(p) * Math.sin(l), y: Math.sin(p), z: Math.cos(p) * Math.cos(l) };
    };

    const path = (pts: { x: number; y: number; z: number }[]) => {
      ctx.beginPath();
      let on = false;
      for (const q of pts) {
        const sx = cx + R * q.x;
        const sy = cy - R * q.y;
        if (q.z >= 0) {
          if (!on) {
            ctx.moveTo(sx, sy);
            on = true;
          } else ctx.lineTo(sx, sy);
        } else on = false;
      }
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      if (!reduce) rot += 0.0007;
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(232,230,225,0.13)";
      for (let lon = 0; lon < 180; lon += 30) {
        const pts = [];
        for (let lat = -90; lat <= 90; lat += 3) pts.push(proj(lat, lon));
        path(pts);
      }
      for (let lat = -60; lat <= 60; lat += 30) {
        const pts = [];
        for (let lon = 0; lon <= 360; lon += 3) pts.push(proj(lat, lon));
        path(pts);
      }
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, 7);
      ctx.strokeStyle = "rgba(232,230,225,0.42)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      for (const c of cities) {
        const q = proj(c.coords[0], c.coords[1]);
        const sx = cx + R * q.x;
        const sy = cy - R * q.y;
        const front = q.z >= 0;
        ctx.beginPath();
        ctx.arc(sx, sy, front ? 3.2 : 1.6, 0, 7);
        ctx.fillStyle = `rgba(232,230,225,${front ? 0.95 : 0.22})`;
        ctx.fill();
        if (front) {
          ctx.beginPath();
          ctx.arc(sx, sy, 8, 0, 7);
          ctx.strokeStyle = "rgba(232,230,225,0.35)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      if (running && !reduce) raf = requestAnimationFrame(draw);
    };

    // Pause when off-screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running && !reduce) raf = requestAnimationFrame(draw);
      },
      { threshold: 0 },
    );
    io.observe(canvas);
    draw();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [cities]);

  return (
    <canvas
      ref={ref}
      width={760}
      height={760}
      aria-hidden
      className="h-[280px] w-[280px] max-w-full md:h-[380px] md:w-[380px]"
    />
  );
}
