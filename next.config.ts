import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sandblasting-colombia",
        destination: "/sandblasting-cartagena",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
