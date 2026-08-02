export const SITE_NAME = "GamePK";
export const SITE_URL = "https://gamepk.net.pk";
export const SITE_DESCRIPTION =
  "GamePK Download Latest Version For Android 2026 — play online hot games & JILI slots with fast JazzCash & Easypaisa withdrawals and 24/7 support. Official GamePK APK at gamepk.net.pk.";
export const SITE_KEYWORDS = [
  "GamePK",
  "gamepk",
  "gamepk.net.pk",
  "GamePK download",
  "GamePK APK",
  "GamePK Pakistan",
  "GamePK JazzCash",
  "GamePK Easypaisa",
  "GamePK deposit",
  "GamePK withdraw",
  "Fortune Gems 3",
  "Money Coming",
  "Happy Fishing",
  "JILI slots Pakistan",
  "online gaming Pakistan",
  "slots Pakistan",
  "GamePK login",
  "GamePK bonus",
];
export const CONTACT_EMAIL = "hello@gamepk.net.pk";
export const DOWNLOAD_URL =
  "http://vip888.32gamespk.com/?referralCode=jhc4960";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/1F2iuqsGAW/?mibextid=wwXIfr",
  youtube: "https://www.youtube.com/@gamepk-k",
} as const;

export const APP_DETAILS = {
  name: "GamePK",
  version: "Latest 2026",
  category: "Games, Slots, Casino",
  payment: "JazzCash, Easypaisa",
  language: "English / Urdu",
  price: "Free to download",
  platform: "Android & PC",
} as const;

export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/download", label: "Download" },
  { href: "/deposit", label: "Deposit" },
  { href: "/withdraw", label: "Withdraw" },
  { href: "/pc", label: "PC Guide" },
  { href: "/about", label: "About Us" },
  { href: "/blogs", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];
