import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";

/** @type {import('astro').AstroUserConfig} */

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel({
    imagesConfig: {
      domains: ["dartiles.me"],
      sizes: [208, 40],
      formats: ["image/webp"],
    }
  })
});