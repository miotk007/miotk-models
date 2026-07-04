import { CAMPAIGNS, CITIES, MODELS, SERVICES } from "./content";
import type { Campaign, City, Model, Service } from "./types";

/**
 * The content adapter — the ONLY module the app queries for data.
 *
 * Today it resolves against the local seed in `content.ts`. To connect a CMS,
 * replace the bodies of these functions with real fetches (Sanity GROQ,
 * Contentful GraphQL, a Supabase query) and map the response into the domain
 * types from `lib/types.ts`. Every function is already async, so no call site
 * changes. Nothing else in the codebase imports the backend directly.
 *
 * Example (Sanity):
 *   export async function getModels() {
 *     return sanityClient.fetch<Model[]>(`*[_type == "model"] | order(name asc){...}`);
 *   }
 */

export async function getModels(category?: Model["category"]): Promise<Model[]> {
  const all = MODELS;
  return category ? all.filter((m) => m.category === category) : all;
}

export async function getModel(slug: string): Promise<Model | null> {
  return MODELS.find((m) => m.slug === slug) ?? null;
}

export async function getModelSlugs(): Promise<string[]> {
  return MODELS.map((m) => m.slug);
}

export async function getCampaigns(): Promise<Campaign[]> {
  return CAMPAIGNS;
}

export async function getCampaign(slug: string): Promise<Campaign | null> {
  return CAMPAIGNS.find((c) => c.slug === slug) ?? null;
}

export async function getCities(): Promise<City[]> {
  return CITIES;
}

export async function getServices(): Promise<Service[]> {
  return SERVICES;
}
