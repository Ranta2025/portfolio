export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
  author: string;
  locale: string;
}

export const site: SiteConfig = {
  title: "Rafael Tanda — Backend Engineer",
  description:
    "Backend engineer specializing in Go, TypeScript, and real-time distributed systems. 3rd-year CS student, relocating to Spain, available for remote and on-site roles.",
  url: "https://portfolio-ten-gamma-xo927n567h.vercel.app",
  author: "Rafael Tanda",
  locale: "en",
  ogImage: "/avatar.svg",
};
