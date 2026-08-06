import Image from "next/image";
import { STREFA_ASSETS } from "@/lib/productions";

const disciplines = [
  "Creative Strategy",
  "Casting",
  "Production Coordination",
  "Model Direction",
  "Asset System",
  "Digital Integration",
] as const;

export function ProductionHero() {
  return (
    <header>
      <div className="grain relative min-h-[calc(100svh-89px)] overflow-hidden bg-ph2 lg:min-h-[calc(100svh-128px)]">
        <Image
          src={STREFA_ASSETS.hero.src}
          alt={STREFA_ASSETS.hero.alt}
          fill
          sizes="100vw"
          priority
          className="object-cover object-[82%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,10,0.2)_0%,rgba(12,11,10,0.03)_30%,rgba(12,11,10,0.84)_100%)] md:bg-[linear-gradient(90deg,rgba(12,11,10,0.76)_0%,rgba(12,11,10,0.34)_47%,rgba(12,11,10,0.05)_76%)]" />
        <div className="relative z-10 flex min-h-[calc(100svh-89px)] flex-col justify-between px-6 py-8 md:px-10 md:py-10 lg:min-h-[calc(100svh-128px)] lg:px-12 lg:py-12">
          <p className="font-sans text-[9px] font-light uppercase tracking-[0.24em] text-white/70 md:text-[10px] md:tracking-[0.32em]">
            Strefa Piękna i Gustu / Beauty Production
          </p>
          <div className="max-w-[840px] pb-2">
            <h1 className="text-balance font-display text-[clamp(3.15rem,8.2vw,8.25rem)] font-normal leading-[0.82] tracking-[-0.045em] text-white">
              One production.
              <br />
              An entire brand world.
            </h1>
            <p className="mt-7 max-w-[55ch] font-sans text-[12px] font-light leading-[1.75] text-white/75 md:mt-9 md:text-sm">
              For a premium hair salon in Gdańsk, we transformed a single
              production into a modular visual system designed for the website,
              social media, editorial stories and future campaigns.
            </p>
          </div>
        </div>
      </div>

      <div className="grid border-b border-line md:grid-cols-[0.8fr_0.8fr_2fr]">
        <HeroMeta label="Client">Strefa Piękna i Gustu</HeroMeta>
        <HeroMeta label="Location">Gdańsk, Poland</HeroMeta>
        <HeroMeta label="Disciplines" last>
          <span className="flex flex-wrap gap-x-4 gap-y-1.5">
            {disciplines.map((discipline) => (
              <span key={discipline}>{discipline}</span>
            ))}
          </span>
        </HeroMeta>
      </div>
    </header>
  );
}

function HeroMeta({
  label,
  children,
  last = false,
}: {
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`border-line px-6 py-6 md:px-8 ${last ? "" : "border-b md:border-b-0 md:border-r"}`}
    >
      <div className="eyebrow">{label}</div>
      <div className="mt-3 font-sans text-[11px] font-light leading-[1.7] text-fg/85">
        {children}
      </div>
    </div>
  );
}
