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
    basedIn: "Poland",
    cover: NEAMAT_GHALY_FRAMES[0],
    frames: [...NEAMAT_GHALY_FRAMES],
    measurements: {},
    campaigns: [],
    // Answers below are Neamat's own words from the questionnaire in
    // /content/interviews/neamat-ghaly-questionnaire.md, with spelling
    // corrected only. `introduction` stays empty until she supplies one —
    // do not compose it on her behalf.
    humanProfile: {
      showIncompleteSections: false,
      introduction: "",
      origin: "Egypt",
      basedIn: "Poland",
      languages: ["Arabic", "English", "French"],
      interests: [
        "Fashion",
        "Skincare",
        "Wellness & fitness",
        "Photography",
        "Travel & cultures",
        "Languages",
        "Creativity & digital branding",
      ],
      featuredQuote:
        "In front of the camera, I discovered that the most powerful thing I can represent is myself.",
      shortAnswers: [
        {
          question: "The meaning of your name:",
          answer: "Hope Ghaly",
        },
        {
          question: "One word that describes you:",
          answer: "Majestic",
        },
        {
          question: "What do you bring to a set beyond your appearance?",
          answer:
            "I bring enthusiasm, positive energy, and a genuine willingness to learn and discover.",
        },
        {
          question:
            "What kind of work would make you feel proud, rather than simply visible?",
          answer:
            "I am interested in fashion, beauty, editorial, and lifestyle modeling projects that allow me to express creativity and tell meaningful stories. I enjoy working on projects related to fashion campaigns, skincare, wellness, cultural themes, and artistic photography. I am open to exploring new creative collaborations while keeping my work elegant, authentic, and aligned with my values.",
        },
      ],
      longAnswers: [
        {
          question: "What changes in you when you step in front of a camera?",
          answer:
            "In front of the camera, I discovered that the most powerful thing I can represent is myself. I believe authenticity, confidence, and genuine emotions create the strongest connection, and I enjoy expressing my personality and story through every shot.",
        },
        {
          question: "What makes you trust a photographer or creative team?",
          answer:
            "Clear communication, being respectful and flexible, beside willing to introduce or accept creative ideas.",
        },
        {
          question:
            "Is there a side of your personality that has not yet been captured in photographs?",
          answer:
            "A part of my personality that is not always captured in photos is the combination of different sides of who I am. I can be passionate about meaningful causes like human rights campaigns, while also being playful, curious, and connected to nature, animals, and fashion. I believe this mix of sensitivity, maturity, creativity and joy is what makes me unique.",
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
