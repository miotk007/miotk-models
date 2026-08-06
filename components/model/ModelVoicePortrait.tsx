import type { ModelHumanProfile } from "@/lib/types";
import {
  hasText,
  hasVoicePortrait,
  showsIncompleteSections,
} from "@/lib/model-human-profile";
import { Reveal } from "@/components/Reveal";

export function ModelVoicePortrait({
  modelName,
  profile,
}: {
  modelName: string;
  profile?: ModelHumanProfile;
}) {
  if (!profile || !hasVoicePortrait(profile)) return null;

  const video = profile.videoPortrait;
  const audio = profile.audioPortrait;
  const portrait = video ?? audio;
  const incomplete = showsIncompleteSections(profile);
  if (!portrait && !incomplete) return null;

  return (
    <Reveal
      as="section"
      className="border-t border-line px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-page grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <p className="eyebrow tracking-[0.34em]">A human portrait</p>
          <h2 className="mt-5 max-w-[12ch] font-display text-4xl font-normal leading-[1.02] tracking-[-0.02em] md:text-5xl">
            Hear {modelName.split(" ")[0]} in her own words.
          </h2>
          {portrait && hasText(portrait.duration) ? (
            <p className="mt-5 font-sans text-[10px] font-light uppercase tracking-[0.2em] text-muted">
              Duration — {portrait.duration}
            </p>
          ) : null}
        </div>

        <div>
          {video ? (
            <video
              controls
              preload="none"
              poster={video.poster}
              className="aspect-video w-full bg-ph2"
            >
              <source src={video.src} />
              <track
                kind="captions"
                src={video.captions}
                srcLang="en"
                label="English"
                default
              />
              Your browser does not support the video element.
            </video>
          ) : audio ? (
            <audio controls preload="none" className="w-full" src={audio.src}>
              Your browser does not support the audio element.
            </audio>
          ) : incomplete ? (
            <div
              aria-hidden="true"
              className="flex min-h-[220px] items-start border-y border-line py-5"
            >
              <span className="font-sans text-[9px] font-light uppercase tracking-[0.2em] text-faint">
                Audio or video portrait
              </span>
            </div>
          ) : null}

          {portrait ? (
            <details className="mt-8 border-y border-line py-5">
              <summary className="cursor-pointer font-sans text-[10px] font-light uppercase tracking-[0.22em] text-muted transition-colors duration-500 hover:text-fg">
                Read transcript
              </summary>
              <p className="mt-6 max-w-[68ch] whitespace-pre-line font-sans text-[13px] font-light leading-[1.9] text-muted">
                {portrait.transcript}
              </p>
            </details>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
