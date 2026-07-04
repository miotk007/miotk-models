/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Modern formats first for the smallest payloads.
    formats: ["image/avif", "image/webp"],
    // When a CMS (Sanity / Supabase Storage / Contentful) is connected,
    // whitelist its image host here, e.g.:
    // remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;
