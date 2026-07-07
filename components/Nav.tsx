"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_PRIMARY, NAV_SECONDARY, SITE } from "@/lib/content";
import { EASE_EDITORIAL } from "@/lib/motion";
import { clsx } from "@/lib/clsx";

const ALL_LINKS = [...NAV_PRIMARY, ...NAV_SECONDARY];

export function Nav() {
  const [open, setOpen] = useState(false);

  // Lock scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };

    closeOnDesktop();
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-sm">
      {/* Meta strip */}
      <div className="hidden items-center justify-between border-b border-line px-10 py-[15px] font-sans text-[10px] font-light uppercase tracking-[0.3em] lg:flex lg:px-12">
        <span className="text-muted">Est. {SITE.established}</span>
        <span>PL / EN</span>
      </div>

      {/* Main bar */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-line px-6 py-6 md:px-10 lg:px-12">
        {/* Desktop left nav */}
        <nav className="hidden items-center gap-7 font-sans text-[11px] font-light uppercase tracking-wide lg:flex">
          {NAV_PRIMARY.map((l) => (
            <NavItem key={l.href} href={l.href}>
              {l.label}
            </NavItem>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="justify-self-start font-sans text-[11px] font-light uppercase tracking-wide lg:hidden"
        >
          Menu
        </button>

        {/* Wordmark */}
        <Link
          href="/"
          className="whitespace-nowrap text-center font-display text-2xl font-medium leading-none tracking-[0.05em] md:text-3xl lg:text-[34px]"
        >
          MIOTK MODELS
        </Link>

        {/* Desktop right nav */}
        <nav className="hidden items-center justify-end gap-7 font-sans text-[11px] font-light uppercase tracking-wide lg:flex">
          {NAV_SECONDARY.map((l) => (
            <NavItem key={l.href} href={l.href}>
              {l.label}
            </NavItem>
          ))}
        </nav>

        {/* Mobile spacer / quick link */}
        <Link
          href="/open-call"
          className="justify-self-end font-sans text-[11px] font-light uppercase tracking-wide lg:hidden"
        >
          Apply
        </Link>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
            className="fixed inset-0 z-[100] flex min-h-dvh flex-col overflow-hidden bg-onyx text-fg lg:hidden"
          >
            <div className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-line px-6 py-6">
              <span className="justify-self-start font-sans text-[10px] font-light uppercase tracking-wide text-muted">
                Menu
              </span>
              <span className="justify-self-center whitespace-nowrap font-display text-2xl font-medium tracking-[0.05em]">
                MIOTK MODELS
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="justify-self-end font-sans text-[11px] font-light uppercase tracking-wide text-muted transition-colors duration-500 hover:text-fg"
              >
                Close
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-1 px-6 text-center">
              {ALL_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.06 * i, duration: 0.65, ease: EASE_EDITORIAL }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-display text-[clamp(42px,14vw,76px)] leading-[0.95] tracking-[-0.02em] text-fg transition-colors duration-500 hover:text-muted"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="border-t border-line px-6 py-6 text-center font-sans text-[10px] font-light uppercase tracking-[0.24em] text-muted">
              {SITE.studios.join(" · ")} — Est. {SITE.established}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={clsx(
        "text-fg transition-colors duration-500 hover:text-muted",
      )}
    >
      {children}
    </Link>
  );
}
