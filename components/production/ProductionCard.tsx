import Link from "next/link";
import type { ProductionSummary } from "@/lib/types";
import { ProductionImage } from "./ProductionImage";

export function ProductionCard({ production }: { production: ProductionSummary }) {
  return (
    <Link
      href={production.href}
      aria-label={`View the ${production.client} production case study`}
      className="group block border-t border-line px-6 py-6 transition-colors duration-700 hover:bg-fg/[0.035] md:px-10 md:py-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-page gap-6 lg:grid-cols-[1.45fr_0.55fr] lg:gap-10">
        <ProductionImage
          asset={production.cover}
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="aspect-[16/10] w-full"
        />
        <div className="flex flex-col justify-between gap-10 py-1 lg:py-2">
          <div className="grid grid-cols-2 gap-x-5 gap-y-7 border-t border-line pt-4 lg:grid-cols-1">
            <Meta label="Client" value={production.client} />
            <Meta label="Category" value={production.category} />
            <Meta label="Location" value={production.location} />
          </div>
          <div>
            <h3 className="max-w-[13ch] font-display text-[clamp(2rem,4.2vw,4.5rem)] font-normal leading-[0.96] tracking-[-0.025em]">
              {production.title}
            </h3>
            <p className="mt-6 max-w-[40ch] font-sans text-[12px] font-light leading-[1.75] text-muted md:text-[13px]">
              {production.description}
            </p>
            <span className="mt-9 inline-block border-b border-fg pb-2 font-sans text-[10px] font-light uppercase tracking-[0.24em] transition-opacity duration-500 group-hover:opacity-55">
              View case study →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="eyebrow">{label}</div>
      <div className="mt-2 font-display text-lg leading-tight">{value}</div>
    </div>
  );
}
