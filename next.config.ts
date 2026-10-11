import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // La page Méthodologie est fusionnée dans Services (refonte v2).
      { source: "/methodologie", destination: "/services#methode", permanent: true },
    ];
  },
};

export default nextConfig;
