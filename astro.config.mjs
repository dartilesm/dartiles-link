import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import linkRedirects from './src/utils/link-redirects';
import vercel from "@astrojs/vercel/serverless";

/** @type {import('astro').AstroUserConfig} */

// https://astro.build/config
export default defineConfig({
  redirects: linkRedirects,
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel()
});