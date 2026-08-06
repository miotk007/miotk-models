import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ClientJourney } from "@/components/production/ClientJourney";
import { EditorialGallery } from "@/components/production/EditorialGallery";
import { ProductionHero } from "@/components/production/ProductionHero";
import { ProductionImage } from "@/components/production/ProductionImage";
import { ScopeGrid } from "@/components/production/ScopeGrid";
import { VisualSystem } from "@/components/production/VisualSystem";
import { STREFA_ASSETS } from "@/lib/productions";

const canonical = "/productions/strefa-piekna-i-gustu";
const title = "Strefa Piękna i Gustu — Beauty Production | Miotk Models";
const description =
  "A digital-first beauty production by Miotk Models, transforming one photoshoot into a modular visual system for a premium salon in Gdańsk.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "en",
    url: canonical,
    images: [
      {
        url: STREFA_ASSETS.hero.src,
        width: 3200,
        height: 2133,
        alt: STREFA_ASSETS.hero.alt,
      },
    ],
  },
};

export default function StrefaPieknaCaseStudy() {
  return (
    <article>
      <ProductionHero />

      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-page">
          <Reveal className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="eyebrow">02 / The challenge</p>
            </div>
            <div>
              <h2 className="max-w-[16ch] text-balance font-display text-[clamp(2.8rem,6vw,6rem)] font-normal leading-[0.95] tracking-[-0.035em]">
                A new digital experience needed its own visual language.
              </h2>
              <div className="mt-10 grid gap-5 font-sans text-[13px] font-light leading-[1.9] text-muted md:grid-cols-2 md:gap-10">
                <p>
                  Strefa Piękna i Gustu was entering a new chapter. Its digital
                  experience had been designed as refined, cinematic and
                  editorial, but the available photography came from different
                  moments, styles and purposes.
                </p>
                <p className="text-fg">
                  The problem was not a lack of images.
                  <br />
                  It was a lack of one coherent world.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-16 md:mt-24">
            <ProductionImage
              asset={STREFA_ASSETS.challenge}
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="aspect-[4/3] w-full md:aspect-[16/9]"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 text-onyx md:px-10 md:py-28 lg:px-12 lg:py-36">
        <Reveal className="mx-auto grid max-w-page gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div>
            <p className="font-sans text-[10px] font-light uppercase tracking-[0.28em] text-onyx/50">
              03 / The shift
            </p>
            <h2 className="mt-10 max-w-[13ch] font-display text-[clamp(3.4rem,7.5vw,8rem)] font-normal leading-[0.88] tracking-[-0.045em]">
              The brand did not need more content. It needed content designed to
              work.
            </h2>
          </div>
          <div className="flex items-end">
            <div className="space-y-5 font-sans text-[13px] font-light leading-[1.9] text-onyx/60">
              <p>
                Most productions begin with a moodboard and a list of attractive
                shots. This one began with the places the images had to live.
              </p>
              <p>
                Before planning the scenes, we mapped the website, mobile
                layouts, social formats, service pages, editorial stories and
                future campaign needs.
              </p>
              <p className="text-onyx">Every image was given a purpose before it was photographed.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <ScopeGrid />
      <ClientJourney />

      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-page">
          <Reveal className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <p className="eyebrow">06 / Model direction</p>
            </div>
            <div>
              <h2 className="max-w-[15ch] text-balance font-display text-[clamp(2.9rem,6.2vw,6.5rem)] font-normal leading-[0.94] tracking-[-0.04em]">
                The model was not asked to perform beauty. She was asked to
                experience it.
              </h2>
              <div className="mt-10 grid gap-5 font-sans text-[13px] font-light leading-[1.9] text-muted md:grid-cols-2 md:gap-10">
                <p>
                  The direction avoided continuous posing and artificial
                  reactions. Instead, the model moved through small, believable
                  actions: entering the salon, listening to the stylist,
                  observing herself in the mirror, touching her hair and
                  responding to the final result.
                </p>
                <p>
                  The strongest frames were designed to emerge between formal
                  poses — during movement, conversation and genuine reaction.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-12 items-end gap-3 md:mt-24 md:gap-5">
            <Reveal className="col-span-12 md:col-span-8">
              <ProductionImage
                asset={STREFA_ASSETS.directionReflection}
                sizes="(max-width: 768px) 100vw, 66vw"
                className="aspect-[4/3] w-full"
              />
            </Reveal>
            <Reveal className="col-span-7 col-start-6 -mt-10 md:col-span-4 md:col-start-auto md:mt-0">
              <ProductionImage
                asset={STREFA_ASSETS.directionCraft}
                sizes="(max-width: 768px) 58vw, 34vw"
                className="aspect-[3/4] w-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <VisualSystem />

      <section className="bg-ivory px-6 py-20 text-onyx md:px-10 md:py-28 lg:px-12 lg:py-36">
        <Reveal className="mx-auto max-w-page">
          <p className="font-sans text-[10px] font-light uppercase tracking-[0.28em] text-onyx/50">
            08 / The outcome
          </p>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
            <div>
              <h2 className="max-w-[14ch] font-display text-[clamp(3.3rem,7vw,7.5rem)] font-normal leading-[0.89] tracking-[-0.045em]">
                Not a folder of beautiful images. A reusable brand asset library.
              </h2>
            </div>
            <div className="space-y-5 font-sans text-[13px] font-light leading-[1.9] text-onyx/60 lg:self-end">
              <p>One production created a coherent visual language for the entire brand.</p>
              <p>
                The material could move between the website, social
                communication, service storytelling, team profiles and future
                campaigns without losing its identity.
              </p>
              <p>
                Instead of producing content for a single publication date, the
                shoot created an owned visual foundation that the brand could
                continue using and developing.
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-y border-onyx/20 py-9 md:mt-28 md:grid-cols-3 md:py-12">
            {[
              "One production",
              "Multiple touchpoints",
              "One coherent brand world",
            ].map((line, index) => (
              <div
                key={line}
                className={`py-5 md:px-7 md:py-2 ${
                  index < 2 ? "border-b border-onyx/20 md:border-b-0 md:border-r" : ""
                }`}
              >
                <span className="font-display text-3xl leading-tight md:text-4xl">
                  {line}
                </span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-20 max-w-[18ch] text-center font-display text-[clamp(2.5rem,5.4vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.035em] md:mt-28">
            We did not produce images to fill a website. We built a visual world
            the brand could continue using.
          </p>
        </Reveal>
      </section>

      <EditorialGallery />

      <section className="border-t border-line px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <Reveal className="mx-auto max-w-page">
          <p className="eyebrow">10 / Credits</p>
          <dl className="mt-10 grid border-t border-line md:grid-cols-3">
            <Credit label="Client">Strefa Piękna i Gustu</Credit>
            <Credit label="Creative Strategy & Production">Miotk Models</Credit>
            <Credit label="Location" last>Gdańsk, Poland</Credit>
          </dl>
        </Reveal>
      </section>

      <section className="border-t border-line">
        <div className="px-6 py-20 md:px-10 md:py-28 lg:px-12 lg:py-32">
          <Reveal className="mx-auto max-w-page">
            <p className="eyebrow">11 / Start a conversation</p>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <h2 className="font-display text-[clamp(3.5rem,8vw,8.5rem)] font-normal leading-[0.84] tracking-[-0.045em]">
                  Need more than a photoshoot?
                </h2>
              </div>
              <p className="max-w-[48ch] font-sans text-[13px] font-light leading-[1.9] text-muted">
                We build productions around the places your brand needs to exist
                — from campaign concepts and casting to complete visual systems
                designed for digital use.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid border-t border-line md:grid-cols-2">
          <Link
            href="/book"
            className="group flex min-h-[220px] flex-col justify-between border-b border-line px-6 py-10 transition-colors duration-700 hover:bg-fg hover:text-onyx md:min-h-[280px] md:border-b-0 md:border-r md:px-10 lg:px-12"
          >
            <span className="font-sans text-[10px] font-light uppercase tracking-[0.28em] text-muted group-hover:text-onyx/55">
              For brands
            </span>
            <span className="font-display text-4xl leading-none md:text-5xl">
              Build a production →
            </span>
          </Link>
          <Link
            href="/contact"
            className="group flex min-h-[220px] flex-col justify-between px-6 py-10 transition-colors duration-700 hover:bg-fg hover:text-onyx md:min-h-[280px] md:px-10 lg:px-12"
          >
            <span className="font-sans text-[10px] font-light uppercase tracking-[0.28em] text-muted group-hover:text-onyx/55">
              General enquiries
            </span>
            <span className="font-display text-4xl leading-none md:text-5xl">
              Discuss a project →
            </span>
          </Link>
        </div>
      </section>
    </article>
  );
}

function Credit({
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
      className={`border-line py-6 md:px-6 ${
        last ? "border-b md:border-b-0" : "border-b md:border-b-0 md:border-r"
      }`}
    >
      <dt className="eyebrow">{label}</dt>
      <dd className="mt-3 font-display text-2xl leading-tight">{children}</dd>
    </div>
  );
}
