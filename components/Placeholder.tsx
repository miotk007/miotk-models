import { clsx } from "@/lib/clsx";

/**
 * Editorial placeholder for frames that don't have a photograph yet. Reads as
 * an intentional design element (diagonal hairlines) rather than a broken
 * image, which keeps the "growing agency" story believable at any roster size.
 */
export function Placeholder({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center bg-[repeating-linear-gradient(135deg,#1c1b18_0_11px,#151412_11px_22px)]",
        className,
      )}
    >
      {label ? (
        <span className="text-center font-sans text-[9px] font-light uppercase leading-relaxed tracking-[0.2em] text-faint">
          {label}
        </span>
      ) : null}
    </div>
  );
}
