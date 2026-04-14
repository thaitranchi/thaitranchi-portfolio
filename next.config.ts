import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Minimal server bundle for Docker / ECS / App Runner (see Dockerfile)
  output: "standalone",
};

export default nextConfig;
