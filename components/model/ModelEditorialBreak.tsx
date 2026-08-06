import type { ModelHumanProfile } from "@/lib/types";
import {
  hasEditorialBreak,
  hasText,
  showsIncompleteSections,
  visibleAnswers,
} from "@/lib/model-human-profile";
import { EditorialImage } from "@/components/EditorialImage";
import { Reveal } from "@/components/Reveal";

export function ModelEditorialBreak({
  modelName,
  profile,
}: {
  modelName: string;
  profile?: ModelHumanProfile;
}) {
  if (!profile || !hasEditorialBreak(profile)) return null;

  const incomplete = showsIncompleteSections(profile);
  const answers = visibleAnswers(profile.shortAnswers, incomplete).slice(0, 3);
  const portrait = profile.editorialPortrait;

  return (
    <section
      aria-labelledby="beyond-the-image-title"
      className="border-b border-line"
    >
      <div
        className={`grid grid-cols-1 ${
          portrait ? "lg:grid-cols-[0.82fr_1.18fr]" : ""
        }`}
      >
        {portrait ? (
          <EditorialImage
            src={portrait.src}
            alt={portrait.alt}
            sizes="(max-width: 1024px) 100vw, 41vw"
            objectPosition={portrait.objectPosition ?? "center 30%"}
            className="min-h-[68svh] border-line lg:min-h-[860px] lg:border-r"
          />
        ) : null}
        <Reveal className="px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
          <p className="eyebrow tracking-[0.34em]">Human profile</p>
          <h2
            id="beyond-the-image-title"
            className="mt-5 max-w-[12ch] font-display text-5xl font-normal uppercase leading-[0.96] tracking-[-0.025em] md:text-6xl lg:text-7xl"
          >
            Beyond the image
          </h2>
          <p className="mt-6 max-w-[48ch] font-sans text-[12px] font-light leading-relaxed text-muted md:text-[13px]">
            {modelName} on identity, ambition and the person behind the
            photograph.
          </p>

          {hasText(profile.featuredQuote) ? (
            <blockquote className="mt-14 max-w-[18ch] font-display text-3xl italic leading-[1.22] tracking-[-0.015em] md:text-4xl">
              {profile.featuredQuote}
            </blockquote>
          ) : incomplete ? (
            <div
              aria-hidden="true"
              className="mt-14 min-h-[150px] border-y border-line py-5"
            >
              <span className="font-sans text-[9px] font-light uppercase tracking-[0.2em] text-faint">
                Featured quote
              </span>
            </div>
          ) : null}

          {answers.length > 0 ? (
            <dl className="mt-14 border-t border-line">
              {answers.map(({ question, answer }) => (
                <div
                  key={question}
                  className="grid grid-cols-1 gap-3 border-b border-line py-6 md:grid-cols-[0.75fr_1.25fr] md:gap-8"
                >
                  <dt className="font-sans text-[10px] font-light uppercase leading-relaxed tracking-[0.18em] text-muted">
                    {question}
                  </dt>
                  <dd className="min-h-[54px] font-display text-xl leading-relaxed">
                    {answer || <span aria-hidden="true">&nbsp;</span>}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
