import Link from "next/link";
import { clsx } from "@/lib/clsx";

type Variant = "line" | "muted" | "display";

/**
 * Editorial link-button. Deliberately not a filled control — the identity
 * favours underlined type over buttons. `display` renders the large Bodoni
 * call-to-action used on hero / CTA blocks.
 */
export function Button({
  href,
  children,
  variant = "line",
  className,
  onClick,
  type,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const styles: Record<Variant, string> = {
    line: "font-sans text-[11px] font-light uppercase tracking-wide border-b border-fg pb-[7px] text-fg transition-colors duration-500 hover:text-muted",
    muted:
      "font-sans text-[11px] font-light uppercase tracking-wide text-muted transition-colors duration-500 hover:text-fg",
    display:
      "font-display text-2xl md:text-[28px] text-fg border-b border-fg pb-[7px] transition-colors duration-500 hover:text-muted",
  };

  const cls = clsx("inline-block cursor-pointer", styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
