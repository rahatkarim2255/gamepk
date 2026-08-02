import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "GamePK",
    description: "Pakistan's premier gaming platform — blogs, slots, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#dc2626",
    icons: [
      {
        src: "/gamepk.webp",
        sizes: "512x512",
        type: "image/webp",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
