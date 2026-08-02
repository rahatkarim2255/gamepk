import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Keep Turbopack rooted in this project (avoids parent C:\Users\DELL\package-lock.json)
    root: path.join(__dirname),
  },
};

export default nextConfig;
