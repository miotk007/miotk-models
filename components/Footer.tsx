import Link from "next/link";
import { SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="flex flex-col gap-4 px-6 py-6 font-sans text-[10px] font-light uppercase tracking-[0.2em] text-muted md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
        <span>© {SITE.established} {SITE.name}</span>
        <div className="flex gap-6">
          <Link href={SITE.instagramUrl} className="transition-colors duration-500 hover:text-fg">
            Instagram
          </Link>
          <Link href="/contact" className="transition-colors duration-500 hover:text-fg">
            Contact
          </Link>
          <Link href="/about" className="transition-colors duration-500 hover:text-fg">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
