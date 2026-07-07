import Image from "next/image";
import { Button } from "./Button";

/**
 * Homepage hero — an editorial split: quiet type on the left, dominant
 * photography on the right. Deliberately asymmetric. The portrait is the LCP
 * image, so it's marked `priority`; the "breathe" animation is CSS-only and
 * respects prefers-reduced-motion.
 */
export function Hero({
  image,
  modelName,
  meta,
}: {
  image: string;
  modelName: string;
  meta: string;
}) {
  return (
    <section className="grid grid-cols-1 border-t border-line lg:grid-cols-[0.82fr_1.18fr]">
      {/* Text column */}
      <div className="flex min-h-[60vh] flex-col justify-between gap-12 border-line px-6 py-14 md:px-10 md:py-16 lg:min-h-[740px] lg:border-r lg:px-12 lg:py-[72px]">
        <p className="eyebrow tracking-[0.38em]">Creative Production House</p>
        <h1 className="font-display text-[15vw] font-normal leading-[0.98] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[90px]">
          Between Europe
          <br />
          and Asia.
        </h1>
        <div className="flex items-center gap-8">
          <Button href="/book" variant="line">
            Book talent
          </Button>
          <Button href="/board" variant="muted">
            The board
          </Button>
        </div>
      </div>

      {/* Photography column */}
      <div className="grain relative min-h-[62vh] overflow-hidden bg-ph2 lg:min-h-[740px]">
        <Image
          src={image}
          alt={`${modelName} — featured`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          style={{ objectFit: "cover", objectPosition: "center 22%" }}
          className="animate-breathe saturate-[0.92] contrast-[1.02]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent to-[34%]" />
        <div className="absolute right-6 top-6 font-sans text-[9px] font-light uppercase tracking-[0.34em] text-white/50 [writing-mode:vertical-rl]">
          Nº 01 — SS26
        </div>
        <div className="absolute inset-x-6 bottom-6 flex items-baseline justify-between">
          <span className="font-display text-2xl italic text-white">{modelName}</span>
          <span className="font-sans text-[9px] font-light uppercase tracking-[0.24em] text-white/60">
            {meta}
          </span>
        </div>
      </div>
    </section>
  );
}
