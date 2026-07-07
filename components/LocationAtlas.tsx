"use client";

import Image from "next/image";
import type { PointerEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "@/lib/clsx";
import { EASE_EDITORIAL } from "@/lib/motion";

type LocationFrame = {
  src: string;
  title: string;
  objectPosition?: string;
};

type AtlasLocation = {
  key: string;
  name: string;
  role: string;
  coords: [number, number];
  meta: string;
  description: string;
  frames: LocationFrame[];
};

type ProjectedMarker = {
  key: string;
  x: number;
  y: number;
  z: number;
};

const D = Math.PI / 180;

export function LocationAtlas({ locations }: { locations: AtlasLocation[] }) {
  const [activeKey, setActiveKey] = useState(locations[0]?.key ?? "");
  const active = useMemo(
    () => locations.find((location) => location.key === activeKey) ?? locations[0],
    [activeKey, locations],
  );

  return (
    <div
      data-location-atlas
      className="grid grid-cols-1 border-t border-line lg:grid-cols-[0.92fr_1.08fr]"
    >
      <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden border-line px-6 py-14 md:min-h-[620px] md:px-10 lg:border-r lg:px-12">
        <InteractiveGlobe
          locations={locations}
          activeKey={active.key}
          onSelect={setActiveKey}
        />
        <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between font-sans text-[9px] font-light uppercase tracking-[0.22em] text-muted md:inset-x-10 lg:inset-x-12">
          <span>Drag to rotate</span>
          <span>Click a point</span>
        </div>
      </div>

      <div className="flex min-h-[620px] flex-col">
        <div className="grid border-b border-line md:grid-cols-[0.84fr_1.16fr]">
          <div className="flex min-h-[260px] flex-col justify-between border-line px-6 py-10 md:border-r md:px-10 lg:px-12">
            <p className="eyebrow tracking-[0.3em]">Editorial Atlas</p>
            <h2 className="max-w-[11ch] font-display text-4xl font-normal leading-tight tracking-[-0.015em] md:text-[52px]">
              Locations as moving sets.
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-8 px-6 py-10 md:px-10 lg:px-12">
            <p className="max-w-[38ch] font-sans text-[13px] font-light leading-relaxed text-muted">
              Rotate the network, select a city and let the campaign board shift
              from street colour into studio editorial.
            </p>
            <div className="flex flex-col">
              {locations.map((location) => (
                <button
                  key={location.key}
                  type="button"
                  data-location-trigger={location.key}
                  onClick={() => setActiveKey(location.key)}
                  className={clsx(
                    "group grid grid-cols-[1fr_auto] items-baseline border-t border-line py-4 text-left transition-colors duration-500 last:border-b",
                    active.key === location.key ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  <span className="font-display text-2xl md:text-[30px]">
                    {location.name}
                  </span>
                  <span className="font-sans text-[9px] font-light uppercase tracking-[0.2em] text-muted">
                    {location.role}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            data-active-location={active.key}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease: EASE_EDITORIAL }}
            className="flex flex-1 flex-col"
          >
            <div className="flex items-baseline justify-between gap-8 px-6 py-7 md:px-10 lg:px-12">
              <div>
                <p className="font-sans text-[10px] font-light uppercase tracking-[0.24em] text-muted">
                  {active.meta}
                </p>
                <h3 className="mt-2 font-display text-3xl font-normal md:text-[38px]">
                  {active.name}
                </h3>
              </div>
              <p className="hidden max-w-[32ch] font-sans text-[12px] font-light leading-relaxed text-muted md:block">
                {active.description}
              </p>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-px bg-line md:grid-cols-4">
              {active.frames.map((frame, index) => (
                <figure key={frame.src} className="group bg-bg p-[12px] md:p-[14px]">
                  <div className="relative aspect-[3/4] overflow-hidden bg-ph2">
                    <Image
                      src={frame.src}
                      alt={`${active.name} — ${frame.title}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 16vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: frame.objectPosition ?? "center 22%",
                      }}
                      className="saturate-[0.96] contrast-[1.02] transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.045]"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between gap-3">
                    <span className="font-display text-lg md:text-xl">{frame.title}</span>
                    <span className="font-sans text-[9px] font-light uppercase tracking-[0.16em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function InteractiveGlobe({
  locations,
  activeKey,
  onSelect,
}: {
  locations: AtlasLocation[];
  activeKey: string;
  onSelect: (key: string) => void;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const rotationRef = useRef(0);
  const markersRef = useRef<ProjectedMarker[]>([]);
  const dragRef = useRef({ dragging: false, moved: false, lastX: 0 });

  useEffect(() => {
    const active = locations.find((location) => location.key === activeKey);
    if (active) rotationRef.current = -active.coords[1] * D;
  }, [activeKey, locations]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const R = W * 0.39;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let running = true;

    const proj = (lat: number, lon: number) => {
      const p = lat * D;
      const l = lon * D + rotationRef.current;
      return { x: Math.cos(p) * Math.sin(l), y: Math.sin(p), z: Math.cos(p) * Math.cos(l) };
    };

    const path = (pts: { x: number; y: number; z: number }[]) => {
      ctx.beginPath();
      let on = false;
      for (const q of pts) {
        const sx = cx + R * q.x;
        const sy = cy - R * q.y;
        if (q.z >= -0.04) {
          if (!on) {
            ctx.moveTo(sx, sy);
            on = true;
          } else ctx.lineTo(sx, sy);
        } else {
          on = false;
        }
      }
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      if (!reduce && !dragRef.current.dragging) rotationRef.current += 0.00042;

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
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(232,230,225,0.42)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      markersRef.current = locations.map((location) => {
        const q = proj(location.coords[0], location.coords[1]);
        return { key: location.key, x: cx + R * q.x, y: cy - R * q.y, z: q.z };
      });

      for (const marker of markersRef.current) {
        const location = locations.find((item) => item.key === marker.key);
        if (!location) continue;
        const active = marker.key === activeKey;
        const front = marker.z >= 0;
        ctx.beginPath();
        ctx.arc(marker.x, marker.y, active ? 4.2 : front ? 3.2 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle = active
          ? "rgba(232,230,225,1)"
          : `rgba(232,230,225,${front ? 0.74 : 0.2})`;
        ctx.fill();
        if (front || active) {
          ctx.beginPath();
          ctx.arc(marker.x, marker.y, active ? 13 : 8, 0, Math.PI * 2);
          ctx.strokeStyle = active ? "rgba(232,230,225,0.52)" : "rgba(232,230,225,0.26)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        if (active) {
          ctx.font = "22px Georgia, serif";
          ctx.fillStyle = "rgba(232,230,225,0.78)";
          ctx.fillText(location.name, marker.x + 16, marker.y - 12);
        }
      }

      if (running && !reduce) raf = requestAnimationFrame(draw);
    };

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
  }, [activeKey, locations]);

  const canvasPoint = (event: PointerEvent<HTMLCanvasElement>) => {
    const canvas = ref.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  const handlePointerDown = (event: PointerEvent<HTMLCanvasElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { dragging: true, moved: false, lastX: event.clientX };
  };

  const handlePointerMove = (event: PointerEvent<HTMLCanvasElement>) => {
    const drag = dragRef.current;
    if (!drag.dragging) return;
    const delta = event.clientX - drag.lastX;
    if (Math.abs(delta) > 2) drag.moved = true;
    rotationRef.current += delta * 0.006;
    drag.lastX = event.clientX;
  };

  const handlePointerUp = (event: PointerEvent<HTMLCanvasElement>) => {
    const drag = dragRef.current;
    drag.dragging = false;
    if (drag.moved) return;

    const point = canvasPoint(event);
    const hit = markersRef.current
      .filter((marker) => marker.z > -0.18)
      .find((marker) => Math.hypot(point.x - marker.x, point.y - marker.y) < 24);
    if (hit) onSelect(hit.key);
  };

  return (
    <canvas
      ref={ref}
      width={760}
      height={760}
      aria-label="Rotating editorial location globe"
      role="img"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="h-[300px] w-[300px] max-w-full cursor-grab touch-none active:cursor-grabbing md:h-[440px] md:w-[440px] lg:h-[500px] lg:w-[500px]"
    />
  );
}
