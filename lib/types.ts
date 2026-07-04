/**
 * Domain types. These are intentionally CMS-agnostic: whether the data comes
 * from the local seed file, Sanity, Contentful, or a Supabase table, it is
 * mapped into these shapes in `lib/cms.ts`. The UI only ever imports types
 * from here, never from a specific backend.
 */

export type ModelCategory = "men" | "women" | "new-faces";

export interface ModelMeasurements {
  heightCm: number;
  chestCm?: number;
  waistCm?: number;
  hipsCm?: number;
  shoeEu?: number;
  hair?: string;
  eyes?: string;
}

export interface Model {
  slug: string;
  name: string;
  category: ModelCategory;
  basedIn: string;
  /** Primary portrait, served from /public/images or a CMS CDN. */
  cover: string | null;
  /** Portfolio frames. `null` entries render as editorial placeholders. */
  frames: (string | null)[];
  measurements: ModelMeasurements;
  /** Slugs of campaigns this model appears in. */
  campaigns: string[];
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
