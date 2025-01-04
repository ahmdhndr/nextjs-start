import type { NextConfig } from "next";
import "./src/env/server";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    dirs: ["src"]
  }
};

export default nextConfig;
