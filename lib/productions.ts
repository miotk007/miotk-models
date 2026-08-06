import type { ProductionAsset, ProductionSummary } from "./types";

const base = "/images/productions/strefa-piekna-i-gustu";

export const STREFA_ASSETS = {
  hero: {
    src: `${base}/hero-reflection.jpg`,
    alt: "Client adjusting her finished hairstyle in a fragmented salon mirror.",
    objectPosition: "70% center",
    source: "Lustro/RED/DSC02588.JPG",
    category: "Reflection",
  },
  challenge: {
    src: `${base}/challenge-consultation.jpg`,
    alt: "Stylist and client in conversation during a consultation in the salon.",
    objectPosition: "center 48%",
    source: "Konsultacja/RED/DSC02485.JPG",
    category: "Consultation",
  },
  arrival: {
    src: `${base}/journey-arrival.jpg`,
    alt: "Client entering the salon with a black umbrella.",
    objectPosition: "center 42%",
    source: "Wejście/RED/DSC02492.JPG",
    category: "Arrival",
  },
  consultation: {
    src: `${base}/journey-consultation.jpg`,
    alt: "Client smiling at the stylist during a seated hair consultation.",
    objectPosition: "center 50%",
    source: "Konsultacja/RED/DSC02479.JPG",
    category: "Consultation",
  },
  craft: {
    src: `${base}/journey-craft.jpg`,
    alt: "Stylist shaping the client’s hair with a heated styling tool.",
    objectPosition: "center 43%",
    source: "Usługa/RED/DSC02438.JPG",
    category: "Craft",
  },
  reflection: {
    src: `${base}/journey-reflection.jpg`,
    alt: "Client studying the texture of her finished hair in the mirror.",
    objectPosition: "64% center",
    source: "Lustro/RED/DSC02590.JPG",
    category: "Reflection",
  },
  afterglow: {
    src: `${base}/journey-afterglow.jpg`,
    alt: "Client lifting her styled hair while looking at her reflection.",
    objectPosition: "66% center",
    source: "Lustro/RED/DSC02589.JPG",
    category: "After the visit",
  },
  directionReflection: {
    src: `${base}/direction-reflection.jpg`,
    alt: "Client responding naturally to her reflection and touching a curl.",
    objectPosition: "58% center",
    source: "Lustro/RED/DSC02570.JPG",
    category: "Model direction",
  },
  directionCraft: {
    src: `${base}/direction-craft-detail.jpg`,
    alt: "Close view of the stylist’s hands forming a curl.",
    objectPosition: "center 54%",
    source: "Usługa/RED/DSC02456.JPG",
    category: "Craft detail",
  },
  directionInteraction: {
    src: `${base}/direction-interaction.jpg`,
    alt: "Stylist and client seen together through the salon mirror.",
    objectPosition: "center 44%",
    source: "Usługa/RED/DSC02425.JPG",
    category: "Interaction",
  },
  productCare: {
    src: `${base}/system-product-care.jpg`,
    alt: "Stylist presenting a hair care product in the salon.",
    objectPosition: "center 47%",
    source: "Produkt/RED/DSC02593.JPG",
    category: "Product",
  },
  stylistPortrait: {
    src: `${base}/system-stylist-portrait.jpg`,
    alt: "Portrait of the salon stylist framed by mirrors and soft light.",
    objectPosition: "center 39%",
    source: "Portret/RED/DSC02523.JPG",
    category: "Stylist portrait",
  },
  salonExterior: {
    src: `${base}/system-salon-exterior.jpg`,
    alt: "Strefa Piękna i Gustu salon sign above the entrance.",
    objectPosition: "center 37%",
    source: "Zewnątrz/RED/DSC02510.JPG",
    category: "Salon exterior",
  },
  galleryArrival: {
    src: `${base}/gallery-arrival-profile.jpg`,
    alt: "Client pausing at the salon entrance with an umbrella.",
    objectPosition: "center 40%",
    source: "Wejście/RED/DSC02495.JPG",
    category: "Arrival",
  },
  galleryProducts: {
    src: `${base}/gallery-product-shelf.jpg`,
    alt: "Professional salon products arranged on an illuminated shelf.",
    objectPosition: "center center",
    source: "Kosmetyki/RED/DSC02356.JPG",
    category: "Products",
  },
  galleryService: {
    src: `${base}/gallery-service-precision.jpg`,
    alt: "Stylist working with precision on the client’s hair.",
    objectPosition: "center 45%",
    source: "Usługa/RED/DSC02421.JPG",
    category: "Service",
  },
  galleryCheckout: {
    src: `${base}/gallery-client-checkout.jpg`,
    alt: "Client and stylist sharing a final moment at the salon reception.",
    objectPosition: "center 43%",
    source: "Płatność/RED/DSC02467.JPG",
    category: "After the visit",
  },
  galleryHair: {
    src: `${base}/gallery-hair-movement.jpg`,
    alt: "Client moving her finished curls in front of the salon mirror.",
    objectPosition: "60% center",
    source: "Lustro/RED/DSC02575.JPG",
    category: "Hair movement",
  },
} satisfies Record<string, ProductionAsset>;

export const STREFA_PRODUCTION: ProductionSummary = {
  slug: "strefa-piekna-i-gustu",
  href: "/productions/strefa-piekna-i-gustu",
  client: "Strefa Piękna i Gustu",
  category: "Beauty / Creative Production",
  location: "Gdańsk, Poland",
  title: "One Production. An Entire Brand World.",
  description:
    "A digital-first beauty production designed to create a complete visual system for the brand, not another isolated photoshoot.",
  cover: STREFA_ASSETS.hero,
};

export const STREFA_SCOPE = [
  {
    number: "01",
    title: "Creative Strategy",
    description:
      "Defining the emotional direction, narrative and role of photography within the wider brand experience.",
  },
  {
    number: "02",
    title: "Casting",
    description:
      "Selecting a model capable of communicating the experience of a real client rather than simply presenting a finished hairstyle.",
  },
  {
    number: "03",
    title: "Production Architecture",
    description:
      "Translating the website, social media and future campaign needs into scenes, formats and a structured shot system.",
  },
  {
    number: "04",
    title: "Model Direction",
    description:
      "Building a natural performance around movement, trust, consultation, reflection and the emotional result of the service.",
  },
  {
    number: "05",
    title: "Asset Curation",
    description:
      "Organising the production into a reusable library instead of delivering an unstructured folder of images.",
  },
  {
    number: "06",
    title: "Digital Integration",
    description:
      "Designing compositions, formats and negative space around their final use across desktop, mobile and editorial layouts.",
  },
] as const;

export const STREFA_JOURNEY = [
  {
    number: "01",
    title: "Arrival",
    description: "Entering the space and discovering the atmosphere of the brand.",
    image: STREFA_ASSETS.arrival,
  },
  {
    number: "02",
    title: "Consultation",
    description:
      "The conversation, attention and trust that begin every meaningful transformation.",
    image: STREFA_ASSETS.consultation,
  },
  {
    number: "03",
    title: "Craft",
    description:
      "The hands, movement, precision and products behind the final result.",
    image: STREFA_ASSETS.craft,
  },
  {
    number: "04",
    title: "Reflection",
    description:
      "Mirrors used not only as part of the salon, but as a visual symbol of identity and perception.",
    image: STREFA_ASSETS.reflection,
  },
  {
    number: "05",
    title: "After the Visit",
    description:
      "The moment when the technical service becomes confidence, presence and emotion.",
    image: STREFA_ASSETS.afterglow,
  },
] as const;

export const STREFA_TOUCHPOINTS = [
  "Homepage",
  "Services",
  "Salon",
  "Team",
  "Editorial Stories",
  "Social Media",
  "Seasonal Campaigns",
  "Future Digital Products",
] as const;

export const STREFA_GALLERY = [
  STREFA_ASSETS.galleryArrival,
  STREFA_ASSETS.galleryProducts,
  STREFA_ASSETS.galleryService,
  STREFA_ASSETS.galleryCheckout,
  STREFA_ASSETS.galleryHair,
] as const;
