import { Reveal } from "@/components/Reveal";
import { STREFA_ASSETS, STREFA_TOUCHPOINTS } from "@/lib/productions";
import { ProductionImage } from "./ProductionImage";

export function VisualSystem() {
  return (
    <section className="border-t border-line px-6 py-20 md:px-10 md:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-page">
        <Reveal className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">07 / A visual system, not a gallery</p>
            <h2 className="mt-8 max-w-[10ch] font-display text-[clamp(3.2rem,7vw,7rem)] font-normal leading-[0.9] tracking-[-0.04em]">
              Built for every touchpoint.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="max-w-[54ch] font-sans text-[13px] font-light leading-[1.9] text-muted">
              The production was planned in horizontal and vertical formats,
              with changing subject placement, negative space for typography
              and compositions suitable for both immersive hero sections and
              compact mobile layouts.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16 grid grid-cols-6 gap-3 md:mt-24 md:gap-5 lg:grid-cols-12">
          <ProductionImage
            asset={STREFA_ASSETS.salonExterior}
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="col-span-6 aspect-[16/10] w-full lg:col-span-8"
          />
          <ProductionImage
            asset={STREFA_ASSETS.stylistPortrait}
            sizes="(max-width: 1024px) 50vw, 34vw"
            className="col-span-3 aspect-[3/4] w-full lg:col-span-4"
          />
          <ProductionImage
            asset={STREFA_ASSETS.productCare}
            sizes="(max-width: 1024px) 50vw, 34vw"
            className="col-span-3 aspect-[3/4] w-full lg:col-span-4 lg:col-start-9"
          />
        </Reveal>

        <Reveal className="mt-16 border-t border-line md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STREFA_TOUCHPOINTS.map((touchpoint, index) => (
              <div
                key={touchpoint}
                className={`flex min-h-[120px] flex-col justify-between border-b border-line py-5 pr-4 md:min-h-[150px] md:px-5 ${
                  index % 2 === 0 ? "border-r" : ""
                } ${index % 4 !== 3 ? "md:border-r" : "md:border-r-0"}`}
              >
                <span className="font-sans text-[9px] font-light tracking-[0.2em] text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="max-w-[15ch] font-display text-xl leading-tight md:text-2xl">
                  {touchpoint}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
