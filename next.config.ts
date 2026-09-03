import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first: photography is the payload on nearly every page here.
    formats: ["image/avif", "image/webp"],
    // 90 is available for hero and case study imagery, where visible
    // compression artefacts would undermine the work being shown.
    qualities: [75, 90],
    remotePatterns: [
      { protocol: "https", hostname: "scontent.cdninstagram.com" },
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "**.fbcdn.net" },
    ],
  },
};

export default nextConfig;
