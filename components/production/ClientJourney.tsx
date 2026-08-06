import { Reveal } from "@/components/Reveal";
import { STREFA_JOURNEY } from "@/lib/productions";
import { ProductionImage } from "./ProductionImage";

export function ClientJourney() {
  return (
    <section className="bg-ivory text-onyx">
      <div className="px-6 py-20 md:px-10 md:py-28 lg:px-12 lg:py-36">
        <Reveal className="mx-auto max-w-page">
          <p className="font-sans text-[10px] font-light uppercase tracking-[0.28em] text-onyx/50">
            05 / The client journey
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="max-w-[12ch] font-display text-[clamp(3.25rem,7vw,7.25rem)] font-normal leading-[0.9] tracking-[-0.04em]">
              From appointment to afterglow.
            </h2>
            <p className="max-w-[48ch] font-sans text-[13px] font-light leading-[1.85] text-onyx/60">
              The model was directed as a real client moving through a complete
              salon experience, not as a decorative face placed inside a frame.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-onyx/15">
        {STREFA_JOURNEY.map((stage, index) => (
          <Reveal
            key={stage.number}
            className="border-b border-onyx/15 px-6 py-10 md:px-10 md:py-16 lg:px-12 lg:py-20"
          >
            <article
              className={`mx-auto grid max-w-page items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                index % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <ProductionImage
                asset={stage.image}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={
                  index === 3 || index === 4
                    ? "aspect-[4/3] w-full"
                    : "aspect-[4/5] w-full lg:aspect-[3/4]"
                }
              />
              <div className="flex min-h-[220px] flex-col justify-between gap-14 lg:min-h-[420px] lg:py-4">
                <span className="font-sans text-[10px] font-light tracking-[0.22em] text-onyx/45">
                  {stage.number} / 05
                </span>
                <div>
                  <h3 className="font-display text-[clamp(2.7rem,5vw,5.5rem)] font-normal leading-none tracking-[-0.03em]">
                    {stage.title}
                  </h3>
                  <p className="mt-6 max-w-[38ch] font-sans text-[12px] font-light leading-[1.85] text-onyx/60 md:text-[13px]">
                    {stage.description}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
