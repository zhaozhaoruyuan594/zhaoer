import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/zhaoer",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
