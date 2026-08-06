import Image from "next/image";
import type { ProductionAsset } from "@/lib/types";
import { clsx } from "@/lib/clsx";

export function ProductionImage({
  asset,
  sizes,
  className,
  priority = false,
}: {
  asset: ProductionAsset;
  sizes: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <figure className={clsx("relative overflow-hidden bg-ph2", className)}>
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover", objectPosition: asset.objectPosition }}
      />
    </figure>
  );
}
