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

const GDYNIA_BW_FRAMES = [
  "/images/editorial/gdynia/simon-gdynia-bw-01.jpg",
  "/images/editorial/gdynia/simon-gdynia-bw-02.jpg",
  "/images/editorial/gdynia/simon-gdynia-bw-03.jpg",
  "/images/editorial/gdynia/simon-gdynia-bw-04.jpg",
  "/images/editorial/gdynia/simon-gdynia-bw-05.jpg",
  "/images/editorial/gdynia/simon-gdynia-bw-06.jpg",
  "/images/editorial/gdynia/simon-gdynia-bw-07.jpg",
  "/images/editorial/gdynia/simon-gdynia-bw-08.jpg",
] as const;

const GDYNIA_COLOUR_FRAMES = [
  "/images/editorial/gdynia/simon-gdynia-colour-01.jpg",
  "/images/editorial/gdynia/simon-gdynia-colour-02.jpg",
  "/images/editorial/gdynia/simon-gdynia-colour-03.jpg",
  "/images/editorial/gdynia/simon-gdynia-colour-04.jpg",
  "/images/editorial/gdynia/simon-gdynia-colour-05.jpg",
  "/images/editorial/gdynia/simon-gdynia-colour-06.jpg",
  "/images/editorial/gdynia/simon-gdynia-colour-07.jpg",
  "/images/editorial/gdynia/simon-gdynia-colour-08.jpg",
  "/images/editorial/gdynia/simon-gdynia-colour-09.jpg",
  "/images/editorial/gdynia/simon-gdynia-colour-10.jpg",
  "/images/editorial/gdynia/simon-gdynia-colour-11.jpg",
  "/images/editorial/gdynia/simon-gdynia-colour-12.jpg",
] as const;

const GDYNIA_FRAMES = [
  GDYNIA_BW_FRAMES[5],
  GDYNIA_BW_FRAMES[6],
  GDYNIA_BW_FRAMES[7],
  GDYNIA_BW_FRAMES[4],
  GDYNIA_BW_FRAMES[0],
  GDYNIA_BW_FRAMES[1],
  GDYNIA_BW_FRAMES[2],
  GDYNIA_BW_FRAMES[3],
  GDYNIA_COLOUR_FRAMES[10],
  GDYNIA_COLOUR_FRAMES[11],
  GDYNIA_COLOUR_FRAMES[9],
  GDYNIA_COLOUR_FRAMES[6],
  GDYNIA_COLOUR_FRAMES[2],
  GDYNIA_COLOUR_FRAMES[4],
  GDYNIA_COLOUR_FRAMES[0],
  GDYNIA_COLOUR_FRAMES[1],
  GDYNIA_COLOUR_FRAMES[3],
  GDYNIA_COLOUR_FRAMES[5],
  GDYNIA_COLOUR_FRAMES[7],
  GDYNIA_COLOUR_FRAMES[8],
] as const;

const NEAMAT_GHALY_FRAMES = [
  "/images/models/neamat-ghaly/neamat-ghaly-01.jpg",
  "/images/models/neamat-ghaly/neamat-ghaly-02.jpg",
  "/images/models/neamat-ghaly/neamat-ghaly-03.jpg",
  "/images/models/neamat-ghaly/neamat-ghaly-04.jpg",
  "/images/models/neamat-ghaly/neamat-ghaly-05.jpg",
  "/images/models/neamat-ghaly/neamat-ghaly-06.jpg",
  "/images/models/neamat-ghaly/neamat-ghaly-07.jpg",
  "/images/models/neamat-ghaly/neamat-ghaly-08.jpg",
  "/images/models/neamat-ghaly/neamat-ghaly-09.jpg",
] as const;

export const CAMPAIGNS: Campaign[] = [
  { slug: "gdynia-noir", number: "01", title: "Gdynia Noir", location: "Gdynia", year: 2026, image: GDYNIA_BW_FRAMES[5] },
  { slug: "studio-colour", number: "02", title: "Studio Colour", location: "Gdynia", year: 2026, image: GDYNIA_COLOUR_FRAMES[10] },
  { slug: "shanghai-street", number: "03", title: "Shanghai Street", location: "Shanghai", year: 2026, image: "/images/editorial/simon-shanghai-05.jpg" },
  { slug: "waibaidu-bridge", number: "04", title: "Waibaidu Bridge", location: "Shanghai", year: 2026, image: "/images/editorial/simon-shanghai-06.jpg" },
  { slug: "bund-editorial", number: "05", title: "Bund Editorial", location: "Shanghai", year: 2026, image: "/images/editorial/simon-shanghai-03.jpg" },
  { slug: "lujiazui-light", number: "06", title: "Lujiazui Light", location: "Shanghai", year: 2026, image: "/images/editorial/simon-shanghai-01.jpg" },
];

export const MODELS: Model[] = [
  {
    slug: "simon-miotk",
    name: "Simon Miotk",
    category: "men",
    basedIn: "Warsaw, Gdynia & Shanghai",
    cover: GDYNIA_BW_FRAMES[5],
    frames: [...GDYNIA_FRAMES, ...SHANGHAI_FRAMES],
    measurements: { heightCm: 186, chestCm: 98, waistCm: 78, hipsCm: 96, shoeEu: 44, hair: "Brown", eyes: "Green" },
    campaigns: ["gdynia-noir", "studio-colour", "shanghai-street", "waibaidu-bridge", "bund-editorial", "lujiazui-light"],
  },
  {
    slug: "neamat-ghaly",
    name: "Neamat Ghaly",
    category: "women",
    cover: NEAMAT_GHALY_FRAMES[0],
    frames: [...NEAMAT_GHALY_FRAMES],
    measurements: {},
    campaigns: [],
    // TODO(human-profile): Paste only Neamat-approved answers here after the
    // questionnaire in /content/interviews/neamat-ghaly-questionnaire.md is
    // completed. Empty values deliberately expose the layout without
    // attributing unapproved statements or biographical facts to Neamat.
    humanProfile: {
      showIncompleteSections: true,
      introduction: "",
      origin: "",
      basedIn: "",
      languages: [],
      interests: [],
      featuredQuote: "",
      shortAnswers: [
        {
          question:
            "How would you introduce yourself without mentioning your appearance or modeling?",
          answer: "",
        },
        {
          question: "What do you bring to a set beyond your appearance?",
          answer: "",
        },
        {
          question:
            "What kind of work would make you feel proud, rather than simply visible?",
          answer: "",
        },
      ],
      longAnswers: [
        {
          question:
            "What do people often misunderstand about you when they first meet you?",
          answer: "",
        },
        {
          question: "What matters to you more deeply than most people realise?",
          answer: "",
        },
        {
          question: "What changes in you when you step in front of a camera?",
          answer: "",
        },
        {
          question: "What makes you trust a photographer or creative team?",
          answer: "",
        },
        {
          question:
            "What separates a beautiful photograph from a meaningful one?",
          answer: "",
        },
        {
          question:
            "What can a real human being bring to an image that artificial intelligence cannot reproduce?",
          answer: "",
        },
        {
          question: "What are you building for yourself beyond modeling?",
          answer: "",
        },
      ],
      editorialPortrait: undefined,
      professionalStrengths: [],
      audioPortrait: undefined,
      videoPortrait: undefined,
      editorial: undefined,
    },
  },
];
