import Link from "next/link";

export function ModelFinalBookingCta({ modelName }: { modelName: string }) {
  const firstName = modelName.split(" ")[0];

  return (
    <section className="grid grid-cols-1 border-t border-line md:grid-cols-[1.3fr_0.7fr]">
      <Link
        href="/book"
        className="group flex min-h-[260px] flex-col justify-between border-line px-6 py-12 transition-colors duration-[800ms] hover:bg-fg hover:text-onyx md:min-h-[320px] md:border-r md:px-10 lg:px-12"
      >
        <span className="font-sans text-[10px] font-light uppercase tracking-[0.28em] text-muted group-hover:text-onyx/55">
          Talent booking
        </span>
        <span className="max-w-[14ch] font-display text-4xl leading-none tracking-[-0.02em] md:text-5xl">
          Book {firstName} →
        </span>
      </Link>
      <Link
        href="/board"
        className="group flex min-h-[180px] flex-col justify-between border-t border-line px-6 py-12 transition-colors duration-[800ms] hover:bg-fg hover:text-onyx md:min-h-[320px] md:border-t-0 md:px-10 lg:px-12"
      >
        <span className="font-sans text-[10px] font-light uppercase tracking-[0.28em] text-muted group-hover:text-onyx/55">
          The board
        </span>
        <span className="font-display text-3xl leading-none">More talent →</span>
      </Link>
    </section>
  );
}
