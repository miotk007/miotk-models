import { Reveal } from "./Reveal";

/**
 * The recurring section header: an uppercase label on the left, an optional
 * quiet aside on the right, separated from what precedes it by a hairline.
 */
export function SectionTitle({
  title,
  aside,
  id,
}: {
  title: string;
  aside?: string;
  id?: string;
}) {
  return (
    <Reveal>
      <div
        id={id}
        className="flex items-baseline justify-between border-t border-line px-6 pb-6 pt-14 md:px-10 md:pt-16 lg:px-12"
      >
        <h2 className="font-sans text-[11px] font-light uppercase tracking-[0.24em]">
          {title}
        </h2>
        {aside ? (
          <span className="font-sans text-[11px] font-light uppercase tracking-[0.16em] text-muted">
            {aside}
          </span>
        ) : null}
      </div>
    </Reveal>
  );
}
