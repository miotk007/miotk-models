import Link from "next/link";
import type { ModelHumanProfile } from "@/lib/types";
import { hasEditorialLink, hasText } from "@/lib/model-human-profile";
import { Reveal } from "@/components/Reveal";

export function ModelEditorialLink({
  profile,
}: {
  profile?: ModelHumanProfile;
}) {
  if (!profile || !hasEditorialLink(profile) || !profile.editorial) return null;

  const editorial = profile.editorial;

  return (
    <Reveal as="section" className="border-t border-line">
      <Link
        href={editorial.href}
        className="group grid grid-cols-1 gap-8 px-6 py-12 transition-colors duration-[800ms] hover:bg-fg hover:text-onyx md:grid-cols-[0.72fr_1.28fr] md:px-10 md:py-14 lg:px-12"
      >
        <span className="font-sans text-[10px] font-light uppercase tracking-[0.24em] text-muted group-hover:text-onyx/55">
          Read the editorial
        </span>
        <span>
          <span className="block font-display text-3xl leading-tight md:text-4xl">
            {editorial.title} →
          </span>
          {hasText(editorial.description) ? (
            <span className="mt-3 block max-w-[54ch] font-sans text-[12px] font-light leading-relaxed text-muted group-hover:text-onyx/60">
              {editorial.description}
            </span>
          ) : null}
        </span>
      </Link>
    </Reveal>
  );
}
