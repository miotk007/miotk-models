/**
 * Shared motion primitives. Kept deliberately restrained: short travel, long
 * duration, a single editorial easing curve. Import these instead of writing
 * ad-hoc transitions so motion stays consistent (and calm) across the site.
 */
import type { Variants } from "framer-motion";

export const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

/** Fade + rise, revealed once when scrolled into view. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_EDITORIAL },
  },
};

/** Stagger container for lists of cards / rows. */
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

export const VIEWPORT_ONCE = { once: true, amount: 0.25 } as const;
