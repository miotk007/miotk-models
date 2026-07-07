"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_EDITORIAL } from "@/lib/motion";
import { EditorialImage } from "./EditorialImage";

type PortfolioLightboxProps = {
  frames: string[];
  modelName: string;
  objectPositions: string[];
};

export function PortfolioLightbox({
  frames,
  modelName,
  objectPositions,
}: PortfolioLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeFrame = activeIndex === null ? null : frames[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        return;
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null ? index : (index - 1 + frames.length) % frames.length,
        );
        return;
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index === null ? index : (index + 1) % frames.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, frames.length]);

  if (frames.length === 0) return null;

  const showPrevious = () => {
    setActiveIndex((index) =>
      index === null ? index : (index - 1 + frames.length) % frames.length,
    );
  };

  const showNext = () => {
    setActiveIndex((index) =>
      index === null ? index : (index + 1) % frames.length,
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-px border-y border-line bg-line md:grid-cols-3 lg:grid-cols-6">
        {frames.map((frame, i) => (
          <button
            key={frame}
            type="button"
            aria-label={`Open ${modelName} frame ${i + 1}`}
            onClick={() => setActiveIndex(i)}
            className="group block bg-bg text-left focus-visible:z-10"
          >
            <EditorialImage
              src={frame}
              alt={`${modelName} — frame ${i + 1}`}
              sizes="(max-width: 768px) 50vw, 20vw"
              placeholderLabel="Frame"
              objectPosition={objectPositions[i] ?? "center 18%"}
              className="aspect-[3/4] w-full"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeFrame && activeIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-[90] flex min-h-dvh flex-col bg-onyx/95 text-fg backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.42, ease: EASE_EDITORIAL }}
            onClick={() => setActiveIndex(null)}
          >
            <div className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-line px-6 py-5 font-sans text-[10px] font-light uppercase tracking-[0.24em] md:px-10 lg:px-12">
              <span className="text-muted">
                Frame {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-center">{modelName}</span>
              <button
                type="button"
                aria-label="Close full-screen portfolio image"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex(null);
                }}
                className="justify-self-end text-muted transition-colors duration-500 hover:text-fg"
              >
                Close
              </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center px-4 py-6 md:px-10 md:py-8">
              <button
                type="button"
                aria-label="Previous frame"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-line bg-bg/45 text-fg backdrop-blur-sm transition-colors duration-500 hover:bg-fg hover:text-onyx md:left-8"
              >
                <ArrowIcon direction="left" />
              </button>

              <motion.div
                key={activeFrame}
                className="relative aspect-[2/3] w-[min(88vw,52dvh)] overflow-hidden"
                initial={{ opacity: 0, scale: 0.94, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -10 }}
                transition={{ duration: 0.62, ease: EASE_EDITORIAL }}
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={activeFrame}
                  alt={`${modelName} — frame ${activeIndex + 1} enlarged`}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                  className="drop-shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
                  priority
                />
              </motion.div>

              <button
                type="button"
                aria-label="Next frame"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-line bg-bg/45 text-fg backdrop-blur-sm transition-colors duration-500 hover:bg-fg hover:text-onyx md:right-8"
              >
                <ArrowIcon direction="right" />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="1.4"
    >
      {direction === "left" ? (
        <path d="M14.5 5.5 8 12l6.5 6.5" />
      ) : (
        <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
      )}
    </svg>
  );
}
