// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Portfolio — static output for easy hosting anywhere (Vercel, Netlify, GitHub Pages)
export default defineConfig({
  site: "https://rafaeltanda.dev",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});