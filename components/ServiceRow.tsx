import Link from "next/link";
import type { Service } from "@/lib/types";

/** A single "For Brands" service row — numbered, hairline-separated, calm hover. */
export function ServiceRow({ service, last = false }: { service: Service; last?: boolean }) {
  return (
    <Link
      href="/book"
      className={`grid grid-cols-[48px_1fr_auto] items-baseline px-6 py-[19px] text-fg transition-colors duration-[800ms] hover:bg-fg hover:text-onyx md:px-10 lg:px-12 ${
        last ? "" : "border-b border-line"
      }`}
    >
      <span className="font-sans text-[10px] font-light text-muted">{service.number}</span>
      <span className="font-display text-2xl md:text-[26px]">{service.title}</span>
      <span className="font-sans text-[9px] font-light uppercase tracking-[0.18em] text-muted">
        {service.note}
      </span>
    </Link>
  );
}
