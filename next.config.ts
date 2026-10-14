import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // La page Méthodologie est fusionnée dans Services (refonte v2).
      { source: "/methodologie", destination: "/services#methode", permanent: true },
      // SEO : l'adresse technique Vercel renvoie vers le domaine officiel, pour éviter le contenu en double.
      {
        source: "/:path*",
        has: [{ type: "host", value: "netwave-studio.vercel.app" }],
        destination: "https://www.netwave-studio.company/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
