import Image from "next/image";
import { clsx } from "@/lib/clsx";
import { Placeholder } from "./Placeholder";

/**
 * The single image primitive for the site. Wraps next/image (automatic
 * lazy-loading, responsive srcset, AVIF/WebP) with the house treatment:
 * grayscale by default, easing to full colour on hover, over a placeholder
 * tone. When `src` is null it degrades to an editorial striped placeholder,
 * so the layout is identical whether or not a photograph exists yet.
 */
export function EditorialImage({
  src,
  alt,
  sizes,
  priority = false,
  objectPosition = "center 20%",
  className,
  placeholderLabel = "Image",
}: {
  src: string | null;
  alt: string;
  sizes: string;
  priority?: boolean;
  objectPosition?: string;
  className?: string;
  placeholderLabel?: string;
}) {
  if (!src) {
    return <Placeholder label={placeholderLabel} className={className} />;
  }
  return (
    <div className={clsx("group relative overflow-hidden bg-ph2", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover", objectPosition }}
        className="grayscale transition-[filter,transform] duration-[1200ms] ease-editorial group-hover:grayscale-0"
      />
    </div>
  );
}
