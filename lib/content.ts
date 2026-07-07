import type { Campaign, City, Model, NavLink, Service } from "./types";

/**
 * Seed content. In production this file is replaced by real CMS documents —
 * see `lib/cms.ts` for the single point where the source is swapped. The
 * shapes here match `lib/types.ts` exactly, so no UI code changes on migration.
 */

export const SITE = {
  name: "Miotk Models",
  tagline: "Creative Production House",
  established: 2026,
  studios: ["Warsaw", "Manila"],
  email: "studio@miotkmodels.com",
  instagram: "@miotkmodels",
  instagramUrl: "https://instagram.com/miotkmodels",
} as const;

export const NAV_PRIMARY: NavLink[] = [
  { label: "The Board", href: "/board" },
  { label: "Campaigns", href: "/#campaigns" },
  { label: "For Brands", href: "/book" },
];

export const NAV_SECONDARY: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Open Call", href: "/open-call" },
];

export const CITIES: City[] = [
  { name: "Shanghai", role: "Base · Studio", coords: [31.23, 121.47] },
  { name: "Milano", role: "Fashion Week", coords: [45.46, 9.19] },
  { name: "Seoul", role: "Editorial", coords: [37.57, 126.98] },
  { name: "Manila", role: "Campaigns", coords: [14.6, 120.98] },
  { name: "Budapest", role: "Scouting", coords: [47.5, 19.04] },
];

export const SERVICES: Service[] = [
  { number: "01", title: "Talent Booking", note: "Casting · Contracts" },
  { number: "02", title: "Campaign Production", note: "On set · Delivery" },
  { number: "03", title: "Creative Direction", note: "Concept · Styling" },
  { number: "04", title: "Photo & Video", note: "Studio · Location" },
  { number: "05", title: "Social Content", note: "Series · Rollout" },
  { number: "06", title: "Campaign Execution", note: "End to end" },
];

const SHANGHAI_FRAMES = [
  "/images/editorial/simon-shanghai-02.jpg",
  "/images/editorial/simon-shanghai-01.jpg",
  "/images/editorial/simon-shanghai-03.jpg",
  "/images/editorial/simon-shanghai-04.jpg",
  "/images/editorial/simon-shanghai-05.jpg",
  "/images/editorial/simon-shanghai-06.jpg",
] as const;

export const CAMPAIGNS: Campaign[] = [
  { slug: "shanghai-street", number: "01", title: "Shanghai Street", location: "Shanghai", year: 2026, image: "/images/editorial/simon-shanghai-05.jpg" },
  { slug: "waibaidu-bridge", number: "02", title: "Waibaidu Bridge", location: "Shanghai", year: 2026, image: "/images/editorial/simon-shanghai-06.jpg" },
  { slug: "bund-editorial", number: "03", title: "Bund Editorial", location: "Shanghai", year: 2026, image: "/images/editorial/simon-shanghai-03.jpg" },
  { slug: "lujiazui-light", number: "04", title: "Lujiazui Light", location: "Shanghai", year: 2026, image: "/images/editorial/simon-shanghai-01.jpg" },
];

export const MODELS: Model[] = [
  {
    slug: "simon-miotk",
    name: "Simon Miotk",
    category: "men",
    basedIn: "Warsaw & Shanghai",
    cover: SHANGHAI_FRAMES[0],
    frames: [...SHANGHAI_FRAMES],
    measurements: { heightCm: 186, chestCm: 98, waistCm: 78, hipsCm: 96, shoeEu: 44, hair: "Brown", eyes: "Green" },
    campaigns: ["shanghai-street", "waibaidu-bridge", "bund-editorial", "lujiazui-light"],
  },
];
