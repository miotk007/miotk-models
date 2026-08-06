/**
 * Domain types. These are intentionally CMS-agnostic: whether the data comes
 * from the local seed file, Sanity, Contentful, or a Supabase table, it is
 * mapped into these shapes in `lib/cms.ts`. The UI only ever imports types
 * from here, never from a specific backend.
 */

export type ModelCategory = "men" | "women" | "new-faces";

export interface ModelMeasurements {
  heightCm?: number;
  chestCm?: number;
  waistCm?: number;
  hipsCm?: number;
  shoeEu?: number;
  hair?: string;
  eyes?: string;
}

export interface ModelProfileAnswer {
  question: string;
  answer: string;
}

export interface ModelProfileImage {
  src: string;
  alt: string;
  objectPosition?: string;
}

export interface ModelAudioPortrait {
  src: string;
  duration?: string;
  /** Required whenever audio is published so the portrait remains accessible. */
  transcript: string;
}

export interface ModelVideoPortrait {
  src: string;
  poster?: string;
  duration?: string;
  /** WebVTT captions file served from /public or the configured media CDN. */
  captions: string;
  transcript: string;
}

export interface ModelEditorialLink {
  title: string;
  description?: string;
  href: string;
}

/**
 * Optional editorial layer shared by every model profile. Public components
 * render only populated fields, so the classic agency profile remains intact
 * until approved first-person material is available.
 */
export interface ModelHumanProfile {
  /** Intentionally exposes the editorial structure before approved copy exists. */
  showIncompleteSections?: boolean;
  introduction?: string;
  origin?: string;
  basedIn?: string;
  languages?: string[];
  interests?: string[];
  featuredQuote?: string;
  shortAnswers?: ModelProfileAnswer[];
  longAnswers?: ModelProfileAnswer[];
  editorialPortrait?: ModelProfileImage;
  professionalStrengths?: string[];
  audioPortrait?: ModelAudioPortrait;
  videoPortrait?: ModelVideoPortrait;
  editorial?: ModelEditorialLink;
}

export interface Model {
  slug: string;
  name: string;
  category: ModelCategory;
  basedIn?: string;
  /** Primary portrait, served from /public/images or a CMS CDN. */
  cover: string | null;
  /** Portfolio frames. `null` entries render as editorial placeholders. */
  frames: (string | null)[];
  measurements: ModelMeasurements;
  /** Slugs of campaigns this model appears in. */
  campaigns: string[];
  /** Approved first-person and editorial material; every field is optional. */
  humanProfile?: ModelHumanProfile;
}

export interface Campaign {
  slug: string;
  /** Editorial index, e.g. "01". */
  number: string;
  title: string;
  location: string;
  year: number;
  image: string | null;
}

export interface ProductionAsset {
  src: string;
  alt: string;
  objectPosition?: string;
  source: string;
  category: string;
}

export interface ProductionSummary {
  slug: string;
  href: string;
  client: string;
  category: string;
  location: string;
  title: string;
  description: string;
  cover: ProductionAsset;
}

export interface City {
  name: string;
  role: string;
  /** [lat, lon] — used by the network globe. */
  coords: [number, number];
}

export interface Service {
  number: string;
  title: string;
  note: string;
}

export interface NavLink {
  label: string;
  href: string;
}
