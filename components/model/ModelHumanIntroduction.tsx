import type { ModelHumanProfile } from "@/lib/types";
import {
  hasHumanIntroduction,
  hasText,
  showsIncompleteSections,
} from "@/lib/model-human-profile";
import { Reveal } from "@/components/Reveal";
import { ModelProfileMetadata } from "./ModelProfileMetadata";

export function ModelHumanIntroduction({
  profile,
}: {
  profile?: ModelHumanProfile;
}) {
  if (!profile || !hasHumanIntroduction(profile)) return null;

  return (
    <Reveal
      as="section"
      className="border-t border-line px-6 py-14 md:px-10 md:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto grid max-w-page grid-cols-1 gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <p className="eyebrow tracking-[0.34em]">Human profile</p>
          <h2 className="mt-5 max-w-[12ch] font-display text-4xl font-normal leading-[1.02] tracking-[-0.02em] md:text-5xl">
            Every face has a history.
          </h2>
        </div>
        <div>
          {hasText(profile.introduction) ? (
            <p className="max-w-[62ch] font-display text-2xl leading-[1.35] tracking-[-0.01em] text-fg md:text-[30px]">
              {profile.introduction}
            </p>
          ) : showsIncompleteSections(profile) ? (
            <div
              aria-hidden="true"
              className="min-h-[132px] border-y border-line py-5"
            >
              <span className="font-sans text-[9px] font-light uppercase tracking-[0.2em] text-faint">
                Introduction
              </span>
            </div>
          ) : null}
          <ModelProfileMetadata profile={profile} />
        </div>
      </div>
    </Reveal>
  );
}
