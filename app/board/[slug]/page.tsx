import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { PortfolioLightbox } from "@/components/PortfolioLightbox";
import { Button } from "@/components/Button";
import { getCampaign, getModel, getModelSlugs } from "@/lib/cms";
import type { Campaign } from "@/lib/types";

export async function generateStaticParams() {
  const slugs = await getModelSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const model = await getModel(params.slug);
  if (!model) return { title: "Not found" };
  return {
    title: model.name,
    description: `${model.name} — on the board at Miotk Models. Based in ${model.basedIn}.`,
  };
}

type StatValue = string | number;

type StatLabel = {
  key: string;
  label: string;
  fmt: (v: StatValue) => string;
};

const STAT_LABELS: StatLabel[] = [
  { key: "heightCm", label: "Height", fmt: (v: StatValue) => `${v}` },
  { key: "chestCm", label: "Chest", fmt: (v: StatValue) => `${v}` },
  { key: "waistCm", label: "Waist", fmt: (v: StatValue) => `${v}` },
  { key: "shoeEu", label: "Shoes", fmt: (v: StatValue) => `${v}` },
  { key: "hair", label: "Hair", fmt: (v: StatValue) => `${v}` },
  { key: "eyes", label: "Eyes", fmt: (v: StatValue) => `${v}` },
];

const FRAME_POSITIONS = [
  "center 44%",
  "center 18%",
  "center 18%",
  "center 48%",
  "center 34%",
  "center 20%",
  "center 25%",
  "center 25%",
  "center 18%",
  "center 18%",
  "center 24%",
  "center 28%",
  "center 18%",
  "center 24%",
  "center 20%",
  "center 34%",
  "center 24%",
  "center 40%",
  "center 44%",
  "center 44%",
  "center 18%",
  "center 18%",
  "center 22%",
  "center 18%",
  "center 36%",
  "center 35%",
];

export default async function ModelProfile({
  params,
}: {
  params: { slug: string };
}) {
  const model = await getModel(params.slug);
  if (!model) notFound();

  const campaigns = (
    await Promise.all(model.campaigns.map((slug) => getCampaign(slug)))
  ).filter(Boolean) as Campaign[];

  const m = model.measurements as unknown as Record<string, string | number | undefined>;
  const portfolioFrames = model.frames.filter((frame): frame is string => Boolean(frame));

  return (
    <>
      {/* Sub-header */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center border-t border-line px-6 py-5 font-sans text-[10px] font-light uppercase tracking-[0.24em] md:px-10 lg:px-12">
        <Link href="/board" className="text-muted transition-colors duration-500 hover:text-fg">
          ← The Board
        </Link>
        <span className="text-center tracking-[0.3em]">{model.name}</span>
        <span className="text-right text-muted capitalize">{model.category.replace("-", " ")}</span>
      </div>

      {/* Portrait + stats */}
      <div className="grid grid-cols-1 border-t border-line lg:grid-cols-[1.25fr_0.75fr]">
        <EditorialImage
          src={model.cover}
          alt={model.name}
          sizes="(max-width: 1024px) 100vw, 62vw"
          priority
          objectPosition="center 48%"
          placeholderLabel="Portrait"
          className="min-h-[70vh] border-line lg:min-h-[880px] lg:border-r"
        />
        <div className="flex flex-col px-6 py-14 md:px-10 md:py-16 lg:px-12">
          <p className="eyebrow tracking-[0.36em]">On the board</p>
          <h1 className="mt-6 font-display text-6xl font-normal leading-[0.98] tracking-[-0.02em]">
            {model.name.split(" ").map((part, i) => (
              <span key={i} className="block">
                {part}
              </span>
            ))}
          </h1>
          <p className="mt-3.5 font-display text-xl italic text-muted">
            Based between {model.basedIn}.
          </p>

          <div className="mt-10 grid grid-cols-2">
            {STAT_LABELS.map(({ key, label }) => {
              const value = m[key as string];
              if (value === undefined) return null;
              return (
                <div
                  key={label}
                  className="flex justify-between border-t border-line py-4 [&:nth-child(even)]:pl-6"
                >
                  <span className="font-sans text-[9px] font-light uppercase tracking-[0.2em] text-muted">
                    {label}
                  </span>
                  <span className="font-display text-lg">{value}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-auto flex items-center gap-8 pt-11">
            <Button href="/book" variant="line">
              Book {model.name.split(" ")[0]}
            </Button>
            <Button href="#" variant="muted">
              Download book
            </Button>
          </div>
        </div>
      </div>

      {/* Portfolio frames */}
      <div className="flex items-baseline justify-between border-t border-line px-6 pb-6 pt-14 md:px-10 lg:px-12">
        <span className="font-sans text-[11px] font-light uppercase tracking-[0.24em]">
          Portfolio
        </span>
        <span className="font-sans text-[11px] font-light uppercase tracking-[0.16em] text-muted">
          {portfolioFrames.length} frames
        </span>
      </div>
      <PortfolioLightbox
        frames={portfolioFrames}
        modelName={model.name}
        objectPositions={FRAME_POSITIONS}
      />

      {/* Campaigns */}
      {campaigns.length > 0 ? (
        <>
          <div className="flex items-baseline justify-between border-t border-line px-6 pb-6 pt-14 md:px-10 lg:px-12">
            <span className="font-sans text-[11px] font-light uppercase tracking-[0.24em]">
              Campaigns
            </span>
            <span className="font-sans text-[11px] font-light uppercase tracking-[0.16em] text-muted">
              2026
            </span>
          </div>
          {campaigns.map((c) => (
            <Link
              key={c.slug}
              href="/#campaigns"
              className="grid grid-cols-[52px_1fr_auto] items-baseline border-t border-line px-6 py-[18px] text-fg transition-colors duration-[800ms] hover:bg-fg hover:text-onyx md:px-10 lg:px-12"
            >
              <span className="font-sans text-[10px] font-light text-muted">Nº {c.number}</span>
              <span className="font-display text-2xl md:text-[26px]">{c.title}</span>
              <span className="font-sans text-[9px] font-light uppercase tracking-[0.18em] text-muted">
                {c.location}
              </span>
            </Link>
          ))}
        </>
      ) : null}
    </>
  );
}
