import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { CampaignCard } from "@/components/CampaignCard";
import { ModelCard } from "@/components/ModelCard";
import { ServiceRow } from "@/components/ServiceRow";
import { Globe } from "@/components/Globe";
import { Reveal } from "@/components/Reveal";
import { getCampaigns, getCities, getModels, getServices } from "@/lib/cms";

export default async function HomePage() {
  const [models, campaigns, services, cities] = await Promise.all([
    getModels(),
    getCampaigns(),
    getServices(),
    getCities(),
  ]);

  const featured = models[0];

  return (
    <>
      <Hero
        image={featured.cover ?? "/images/kacper-shanghai.jpg"}
        modelName={featured.name}
        meta="31.23° N — Shanghai"
      />

      {/* The Board — preview */}
      <SectionTitle title="The Board" aside="Open call — apply →" />
      <div className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
        {models.slice(0, 4).map((m) => (
          <ModelCard key={m.slug} model={m} sizes="(max-width: 1024px) 50vw, 25vw" />
        ))}
        {/* Fill the row with "new faces" placeholders while the roster grows. */}
        {Array.from({ length: Math.max(0, 4 - models.length) }).map((_, i) => (
          <Link
            key={`empty-${i}`}
            href="/open-call"
            className="group flex flex-col justify-between border-line p-[14px] transition-colors duration-500 md:p-[18px] [&:not(:last-child)]:border-r"
          >
            <div className="flex aspect-[3/4] w-full items-center justify-center bg-[repeating-linear-gradient(135deg,#1c1b18_0_11px,#151412_11px_22px)]">
              <span className="font-sans text-[9px] font-light uppercase tracking-[0.2em] text-faint">
                New face
              </span>
            </div>
            <span className="mt-3 font-display text-xl text-muted md:text-[22px]">
              Open call →
            </span>
          </Link>
        ))}
      </div>

      {/* Campaigns */}
      <SectionTitle id="campaigns" title="Campaigns" aside="Selected work — 2026" />
      <div className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
        {campaigns.map((c) => (
          <CampaignCard key={c.slug} campaign={c} sizes="(max-width: 1024px) 50vw, 25vw" />
        ))}
      </div>

      {/* For Brands */}
      <div className="grid grid-cols-1 border-t border-line lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="flex flex-col justify-between gap-6 border-line px-6 py-14 md:px-10 md:py-16 lg:border-r lg:px-12 lg:py-[66px]">
          <p className="eyebrow tracking-[0.3em]">For Brands</p>
          <h2 className="max-w-[14ch] font-display text-4xl font-normal leading-tight tracking-[-0.015em] md:text-[44px]">
            Everything a campaign needs, under one roster.
          </h2>
          <p className="max-w-[34ch] font-sans text-[13px] font-light leading-relaxed text-muted">
            From first casting to final delivery — talent, production and
            creative direction handled as one.
          </p>
        </Reveal>
        <div className="flex flex-col border-t border-line lg:border-t-0">
          {services.map((s, i) => (
            <ServiceRow key={s.number} service={s} last={i === services.length - 1} />
          ))}
        </div>
      </div>

      {/* The Network — globe */}
      <div className="grid grid-cols-1 border-t border-line lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex items-center justify-center border-line px-6 py-16 lg:border-r">
          <Globe cities={cities} />
        </div>
        <Reveal className="flex flex-col justify-between gap-10 px-6 py-14 md:px-10 md:py-16 lg:px-12">
          <p className="eyebrow tracking-[0.3em]">The Network</p>
          <h2 className="max-w-[16ch] font-display text-3xl font-normal leading-tight tracking-[-0.01em] md:text-4xl">
            One studio, moving between five cities.
          </h2>
          <ul className="flex flex-col">
            {cities.map((c) => (
              <li
                key={c.name}
                className="flex items-baseline justify-between border-t border-line py-3.5 last:border-b"
              >
                <span className="font-display text-xl">{c.name}</span>
                <span className="font-sans text-[9px] font-light uppercase tracking-[0.2em] text-muted">
                  {c.role}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Dual CTA */}
      <div className="grid grid-cols-1 border-t border-line md:grid-cols-2">
        <Link
          href="/open-call"
          className="group flex min-h-[240px] flex-col justify-between border-line px-6 py-12 transition-colors duration-[800ms] hover:bg-fg hover:text-onyx md:border-r md:px-10 lg:px-12"
        >
          <span className="eyebrow tracking-[0.3em] group-hover:text-onyx/60">Open call</span>
          <span className="font-display text-4xl leading-none">Join the board →</span>
        </Link>
        <Link
          href="/book"
          className="group flex min-h-[240px] flex-col justify-between px-6 py-12 transition-colors duration-[800ms] hover:bg-fg hover:text-onyx md:px-10 lg:px-12"
        >
          <span className="eyebrow tracking-[0.3em] group-hover:text-onyx/60">For brands</span>
          <span className="font-display text-4xl leading-none">Start a campaign →</span>
        </Link>
      </div>
    </>
  );
}
