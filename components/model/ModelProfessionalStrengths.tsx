import type { ModelHumanProfile } from "@/lib/types";
import {
  compactStrings,
  hasProfessionalStrengths,
  showsIncompleteSections,
} from "@/lib/model-human-profile";
import { Reveal } from "@/components/Reveal";

export function ModelProfessionalStrengths({
  profile,
}: {
  profile?: ModelHumanProfile;
}) {
  if (!profile || !hasProfessionalStrengths(profile)) return null;

  const completedStrengths = compactStrings(profile.professionalStrengths).slice(
    0,
    3,
  );
  const strengths =
    completedStrengths.length > 0
      ? completedStrengths
      : showsIncompleteSections(profile)
        ? ["", "", ""]
        : [];

  return (
    <Reveal
      as="section"
      className="border-t border-line px-6 py-14 md:px-10 md:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto grid max-w-page grid-cols-1 gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <h2 className="eyebrow tracking-[0.32em]">What she brings to a set</h2>
        <ol className="border-t border-line">
          {strengths.map((strength, index) => (
            <li
              key={strength || `empty-strength-${index}`}
              className="grid grid-cols-[42px_1fr] items-baseline border-b border-line py-5"
            >
              <span className="font-sans text-[9px] font-light text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-2xl leading-snug md:text-3xl">
                {strength || <span aria-hidden="true">&nbsp;</span>}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
