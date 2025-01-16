import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
    localPatterns: [
      {
        pathname: "./public",
      }
    ],
  },
  output: "export",
};

export default nextConfig;
