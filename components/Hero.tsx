import Image from "next/image";
import { Button } from "./Button";

/**
 * Homepage hero — an editorial cover image with type laid directly into the
 * negative space. The portrait is the LCP image, so it's marked `priority`;
 * the intro cut is CSS-only and runs once on entry.
 */
export function Hero({
  image,
  modelName,
  meta,
  imagePosition = "center 22%",
}: {
  image: string;
  modelName: string;
  meta: string;
  imagePosition?: string;
}) {
  return (
    <section className="grain relative isolate min-h-[min(760px,calc(100svh-132px))] overflow-hidden border-t border-line bg-ivory text-onyx">
      <Image
        src={image}
        alt={`${modelName} — featured`}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: imagePosition }}
        className="animate-breathe !w-[112%] origin-left grayscale contrast-[1.03]"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1] grid grid-cols-3 divide-x divide-onyx/15"
        aria-hidden="true"
      />
      <div className="hero-entry-cut" aria-hidden="true">
        {[0, 1, 2].map((panel) => (
          <span key={panel} style={{ animationDelay: `${panel * 0.16}s` }} />
        ))}
      </div>

      <div className="relative z-[2] flex min-h-[min(760px,calc(100svh-132px))] flex-col justify-between px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
        <p className="font-sans text-[10px] font-light uppercase tracking-[0.38em] text-onyx/55">
          Creative Production House
        </p>
        <div className="max-w-[42rem]">
          <h1 className="font-display text-[17vw] font-normal leading-[0.92] tracking-[-0.03em] text-onyx sm:text-[86px] md:text-[106px] lg:text-[112px] xl:text-[120px]">
            Between Europe
            <br />
            and Asia.
          </h1>
          <div className="mt-11 flex items-center gap-8">
            <Button href="/book" variant="line" className="!border-onyx !text-onyx hover:!text-onyx/55">
              Book talent
            </Button>
            <Button href="/board" variant="muted" className="!text-onyx/55 hover:!text-onyx">
              The board
            </Button>
          </div>
        </div>
        <div className="flex items-end justify-end gap-6">
          <span className="font-sans text-[9px] font-light uppercase tracking-[0.24em] text-onyx/50">
            {meta}
          </span>
        </div>
      </div>

      <div className="absolute right-6 top-6 z-[2] font-sans text-[9px] font-light uppercase tracking-[0.34em] text-onyx/45 [writing-mode:vertical-rl]">
        Nº 01 — SS26
      </div>
    </section>
  );
}
