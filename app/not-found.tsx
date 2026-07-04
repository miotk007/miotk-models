import Link from "next/link";

/** Editorial 404 — stays in character rather than dumping a stack. */
export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center border-t border-line px-6 text-center">
      <p className="eyebrow tracking-[0.36em]">404</p>
      <h1 className="mt-8 font-display text-6xl font-normal tracking-[-0.025em]">
        Off the board.
      </h1>
      <p className="mt-6 max-w-[36ch] font-sans text-sm font-light leading-loose text-muted">
        The page you are looking for isn&apos;t here.
      </p>
      <Link
        href="/"
        className="mt-10 border-b border-fg pb-[7px] font-sans text-[11px] font-light uppercase tracking-wide transition-colors duration-500 hover:text-muted"
      >
        Return home
      </Link>
    </section>
  );
}
