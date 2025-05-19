import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    GITHUB_ID: "Ov23liHVksBzgnKRlBMD",
    GITHUB_SECRET: "92abd461a97858a27a3103ce742acd7dc442ffb4"
  },
  images: {
    domains: ["avatars.githubusercontent.com"]
  }
};

export default nextConfig;
