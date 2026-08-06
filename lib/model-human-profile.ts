import type { ModelHumanProfile, ModelProfileAnswer } from "./types";

export function hasText(value?: string): value is string {
  return Boolean(value?.trim());
}

export function compactStrings(values?: string[]): string[] {
  return values?.filter(hasText) ?? [];
}

export function compactAnswers(
  answers?: ModelProfileAnswer[],
): ModelProfileAnswer[] {
  return (
    answers?.filter(
      ({ question, answer }) => hasText(question) && hasText(answer),
    ) ?? []
  );
}

export function hasHumanIntroduction(profile?: ModelHumanProfile): boolean {
  return Boolean(
    profile &&
      (hasText(profile.introduction) ||
        hasText(profile.origin) ||
        hasText(profile.basedIn) ||
        compactStrings(profile.languages).length > 0 ||
        compactStrings(profile.interests).length > 0),
  );
}

export function hasEditorialBreak(profile?: ModelHumanProfile): boolean {
  return Boolean(
    profile &&
      (hasText(profile.featuredQuote) ||
        compactAnswers(profile.shortAnswers).length > 0 ||
        (profile.editorialPortrait &&
          hasText(profile.editorialPortrait.src) &&
          hasText(profile.editorialPortrait.alt))),
  );
}

export function hasInterview(profile?: ModelHumanProfile): boolean {
  return compactAnswers(profile?.longAnswers).length > 0;
}

export function hasProfessionalStrengths(
  profile?: ModelHumanProfile,
): boolean {
  return compactStrings(profile?.professionalStrengths).length > 0;
}

export function hasVoicePortrait(profile?: ModelHumanProfile): boolean {
  const audio = profile?.audioPortrait;
  const video = profile?.videoPortrait;

  return Boolean(
    (audio && hasText(audio.src) && hasText(audio.transcript)) ||
      (video &&
        hasText(video.src) &&
        hasText(video.captions) &&
        hasText(video.transcript)),
  );
}

export function hasEditorialLink(profile?: ModelHumanProfile): boolean {
  return Boolean(
    profile?.editorial &&
      hasText(profile.editorial.title) &&
      hasText(profile.editorial.href),
  );
}
