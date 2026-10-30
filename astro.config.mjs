// @ts-check
import { defineConfig } from "astro/config";

// Static output: deployable to GitHub Pages, Netlify, Vercel or any file server.
// Keep in sync with src/data/site.ts. Update if the Vercel project gets another name.
export default defineConfig({
  site: "https://rafael-tanda.vercel.app",
  output: "static",
});
