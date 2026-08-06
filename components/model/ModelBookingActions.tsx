import { Button } from "@/components/Button";

export function ModelBookingActions({ modelName }: { modelName: string }) {
  const firstName = modelName.split(" ")[0];

  return (
    <section
      aria-label={`${modelName} booking actions`}
      className="flex flex-col items-start justify-between gap-7 border-t border-line px-6 py-8 sm:flex-row sm:items-center md:px-10 lg:px-12"
    >
      <p className="font-sans text-[10px] font-light uppercase tracking-[0.24em] text-muted">
        Available for selected projects
      </p>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
        <Button href="/book" variant="line">
          Book {firstName}
        </Button>
        <Button href="#" variant="muted">
          Download book
        </Button>
      </div>
    </section>
  );
}
