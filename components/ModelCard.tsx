import Link from "next/link";
import type { Model } from "@/lib/types";
import { EditorialImage } from "./EditorialImage";

/**
 * Board tile linking to a model profile. Scales to any roster size — the grid
 * that holds these is responsive and the data comes from the CMS adapter.
 */
export function ModelCard({ model, sizes }: { model: Model; sizes: string }) {
  return (
    <Link
      href={`/board/${model.slug}`}
      className="group block border-line p-[14px] transition-colors duration-500 md:p-[18px] [&:not(:last-child)]:border-r"
    >
      <EditorialImage
        src={model.cover}
        alt={model.name}
        sizes={sizes}
        placeholderLabel="New face"
        className="aspect-[3/4] w-full"
      />
      <div className="mt-3 flex items-baseline justify-between">
        <span className="font-display text-xl md:text-[22px]">{model.name}</span>
        <span className="font-sans text-[9px] font-light uppercase tracking-[0.12em] text-muted">
          {model.measurements.heightCm}
        </span>
      </div>
    </Link>
  );
}
