import { Reveal } from "@/components/Reveal";
import { STREFA_ASSETS, STREFA_GALLERY } from "@/lib/productions";
import { ProductionImage } from "./ProductionImage";

export function EditorialGallery() {
  const [arrival, products, service, checkout, hair] = STREFA_GALLERY;

  return (
    <section className="border-t border-line px-3 py-16 md:px-5 md:py-24 lg:px-6 lg:py-32">
      <div className="mx-auto max-w-page">
        <Reveal className="flex items-baseline justify-between px-3 pb-8 md:px-5 md:pb-12 lg:px-6">
          <h2 className="font-sans text-[10px] font-light uppercase tracking-[0.28em]">
            Final editorial selection
          </h2>
          <span className="font-sans text-[9px] font-light uppercase tracking-[0.2em] text-muted">
            Strefa Piękna i Gustu
          </span>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
          <Reveal className="col-span-1 md:col-span-5">
            <ProductionImage
              asset={arrival}
              sizes="(max-width: 768px) 50vw, 42vw"
              className="aspect-[2/3] w-full"
            />
          </Reveal>
          <Reveal className="col-span-1 self-end md:col-span-7">
            <ProductionImage
              asset={products}
              sizes="(max-width: 768px) 50vw, 58vw"
              className="aspect-[4/3] w-full"
            />
          </Reveal>

          <Reveal className="col-span-1 mt-8 md:col-span-4 md:mt-20">
            <ProductionImage
              asset={service}
              sizes="(max-width: 768px) 50vw, 34vw"
              className="aspect-[3/4] w-full"
            />
          </Reveal>
          <Reveal className="col-span-1 mt-8 md:col-span-4 md:mt-20">
            <ProductionImage
              asset={checkout}
              sizes="(max-width: 768px) 50vw, 34vw"
              className="aspect-[3/4] w-full"
            />
          </Reveal>
          <Reveal className="col-span-2 mt-3 md:col-span-4 md:mt-20">
            <ProductionImage
              asset={STREFA_ASSETS.directionInteraction}
              sizes="(max-width: 768px) 100vw, 34vw"
              className="aspect-[3/4] w-full"
            />
          </Reveal>

          <Reveal className="col-span-2 mt-8 md:col-span-8 md:col-start-5 md:mt-20">
            <ProductionImage
              asset={hair}
              sizes="(max-width: 768px) 100vw, 66vw"
              className="aspect-[16/10] w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
