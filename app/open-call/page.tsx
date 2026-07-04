import type { Metadata } from "next";
import { OpenCallForm } from "@/components/forms/OpenCallForm";

export const metadata: Metadata = {
  title: "Open Call",
  description: "Apply to the board at Miotk Models. We review every application personally.",
};

export default function OpenCallPage() {
  return (
    <section className="border-t border-line px-6 py-16 md:px-10 md:py-20 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow tracking-[0.36em]">Open Call</p>
        <h1 className="mt-7 font-display text-5xl font-normal leading-none tracking-[-0.025em] md:text-6xl">
          Apply to the board.
        </h1>
        <p className="mt-5 max-w-[42ch] font-sans text-sm font-light leading-relaxed text-muted">
          We review every application personally.
        </p>
        <div className="mt-14">
          <OpenCallForm />
        </div>
      </div>
    </section>
  );
}
