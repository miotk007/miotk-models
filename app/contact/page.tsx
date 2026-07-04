import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Miotk Models studio.",
};

const ROWS = [
  { label: "Instagram", value: SITE.instagram, href: SITE.instagramUrl },
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "Studios", value: SITE.studios.join(" · ") },
  { label: "Availability", value: "Worldwide" },
];

export default function ContactPage() {
  return (
    <section className="border-t border-line px-6 py-16 md:px-10 md:py-20 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-5xl font-normal leading-none tracking-[-0.025em] md:text-6xl">
          Say hello.
        </h1>
        <div className="mt-14">
          {ROWS.map((row, i) => {
            const inner = (
              <div
                className={`grid grid-cols-[110px_1fr] items-baseline gap-6 border-t border-line py-[22px] sm:grid-cols-[150px_1fr] sm:gap-8 ${
                  i === ROWS.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-sans text-[9px] font-light uppercase tracking-[0.24em] text-muted">
                  {row.label}
                </span>
                <span className="font-display text-2xl md:text-[30px]">{row.value}</span>
              </div>
            );
            return row.href ? (
              <Link key={row.label} href={row.href} className="block transition-opacity duration-500 hover:opacity-70">
                {inner}
              </Link>
            ) : (
              <div key={row.label}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
