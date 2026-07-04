import { clsx } from "@/lib/clsx";

/** Page gutter + max width. One source of horizontal rhythm for the site. */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-page px-6 md:px-10 lg:px-12", className)}>
      {children}
    </div>
  );
}
