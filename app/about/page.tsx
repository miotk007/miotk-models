import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Miotk Models exists — a creative house curating talent between Europe and Asia.",
};

const MANIFESTO = [
  "Miotk Models began with a simple conviction — that the right face, in the right frame, can move culture.",
  "We are a creative house working between Europe and Asia. Two worlds that rarely meet, and that make something rare when they do.",
  "We do not chase volume. We curate. Every model, every campaign, every frame is chosen with intent — because quality is not a finish applied at the end, it is the first decision, and every decision after.",
  "We build campaigns meant to outlast a season. This is not an agency in a hurry. It is a house that intends to still be here in ten years, doing quietly excellent work.",
];

export default function AboutPage() {
  return (
    <section className="border-t border-line px-6 py-20 md:px-10 md:py-24 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow tracking-[0.4em]">Why we exist</p>
        <div className="mt-12 space-y-8 text-pretty font-display text-2xl font-normal leading-[1.5] tracking-[-0.005em] md:text-[30px]">
          {MANIFESTO.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <p className="mt-16 font-sans text-[10px] font-light uppercase tracking-[0.28em] text-muted">
          {SITE.name} — Est. {SITE.established} — {SITE.studios.join(" · ")}
        </p>
      </div>
    </section>
  );
}
