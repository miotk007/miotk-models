"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/motion";

/**
 * Reveals children with a single, calm fade-up the first time they enter the
 * viewport. The whole site's scroll motion goes through this one component so
 * it stays consistent — and easy to disable globally if ever needed.
 */
export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "li";
}) {
  const MotionTag = motion[as];
  const reduceMotion = useReducedMotion();

  return (
    <MotionTag
      className={className}
      variants={reduceMotion ? undefined : fadeUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
    >
      {children}
    </MotionTag>
  );
}
