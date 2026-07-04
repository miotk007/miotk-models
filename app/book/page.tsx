import type { Metadata } from "next";
import { BookForm } from "@/components/forms/BookForm";

export const metadata: Metadata = {
  title: "Book a Campaign",
  description:
    "Start a project with Miotk Models — talent, production and creative direction, handled as one.",
};

export default function BookPage() {
  return (
    <section className="border-t border-line px-6 py-16 md:px-10 md:py-20 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow tracking-[0.36em]">Book a Campaign</p>
        <h1 className="mt-7 font-display text-5xl font-normal leading-none tracking-[-0.025em] md:text-6xl">
          Start a project.
        </h1>
        <p className="mt-5 max-w-[42ch] font-sans text-sm font-light leading-relaxed text-muted">
          Tell us what you are building. We handle the rest.
        </p>
        <div className="mt-14">
          <BookForm />
        </div>
      </div>
    </section>
  );
}
