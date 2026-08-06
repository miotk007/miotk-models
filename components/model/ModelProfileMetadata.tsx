import type { ModelHumanProfile } from "@/lib/types";
import { compactStrings, hasText } from "@/lib/model-human-profile";

type MetadataItem = {
  label: string;
  value: string;
};

export function ModelProfileMetadata({
  profile,
}: {
  profile: ModelHumanProfile;
}) {
  const languages = compactStrings(profile.languages);
  const interests = compactStrings(profile.interests);
  const items: MetadataItem[] = [
    ...(hasText(profile.basedIn)
      ? [{ label: "Based in", value: profile.basedIn }]
      : []),
    ...(hasText(profile.origin)
      ? [{ label: "Origin", value: profile.origin }]
      : []),
    ...(languages.length > 0
      ? [{ label: "Languages", value: languages.join(" · ") }]
      : []),
    ...(interests.length > 0
      ? [{ label: "Interests", value: interests.join(" · ") }]
      : []),
  ];

  if (items.length === 0) return null;

  return (
    <dl className="mt-10 grid grid-cols-1 border-t border-line sm:grid-cols-2">
      {items.map(({ label, value }, index) => (
        <div
          key={label}
          className={`border-b border-line py-4 sm:min-h-[92px] sm:py-5 ${
            index % 2 === 1 ? "sm:pl-8" : "sm:pr-8"
          }`}
        >
          <dt className="font-sans text-[10px] font-light uppercase tracking-[0.22em] text-muted">
            {label}
          </dt>
          <dd className="mt-2 font-display text-xl leading-snug text-fg">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
