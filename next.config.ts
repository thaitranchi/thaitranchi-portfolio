import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Minimal server bundle for Docker / ECS / App Runner (see Dockerfile).
  // Skipped on Vercel, where standalone output is not supported (Next 16 bug #96646).
  output: process.env.VERCEL ? undefined : "standalone",
};

export default nextConfig;
