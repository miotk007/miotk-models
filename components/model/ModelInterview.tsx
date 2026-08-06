import type { ModelHumanProfile } from "@/lib/types";
import {
  hasInterview,
  showsIncompleteSections,
  visibleAnswers,
} from "@/lib/model-human-profile";
import { Reveal } from "@/components/Reveal";

export function ModelInterview({
  profile,
}: {
  profile?: ModelHumanProfile;
}) {
  if (!profile || !hasInterview(profile)) return null;

  const answers = visibleAnswers(
    profile.longAnswers,
    showsIncompleteSections(profile),
  ).slice(0, 7);

  return (
    <section
      aria-labelledby="in-her-own-words-title"
      className="border-t border-line px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-page">
        <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <h2
            id="in-her-own-words-title"
            className="max-w-[12ch] font-display text-5xl font-normal uppercase leading-[0.98] tracking-[-0.025em] md:text-6xl"
          >
            In her own words
          </h2>
          <p className="max-w-[46ch] self-end font-sans text-[12px] font-light leading-relaxed text-muted md:text-[13px]">
            A closer look at the person, perspective and ambition behind the
            image.
          </p>
        </Reveal>

        <ol className="mt-14 border-t border-line md:mt-20">
          {answers.map(({ question, answer }, index) => (
            <Reveal
              as="li"
              key={question}
              className="grid grid-cols-1 gap-5 border-b border-line py-9 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:gap-14 md:py-12"
            >
              <div className="flex gap-5">
                <span className="pt-[3px] font-sans text-[9px] font-light tracking-[0.18em] text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="max-w-[30ch] font-sans text-[10px] font-light uppercase leading-relaxed tracking-[0.18em] text-muted">
                  {question}
                </h3>
              </div>
              <p className="min-h-[54px] max-w-[52ch] border-t border-line pt-4 font-display text-lg leading-relaxed md:border-t-0 md:pt-0 md:text-xl">
                {answer || <span aria-hidden="true">&nbsp;</span>}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
