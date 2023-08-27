import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import linkRedirects from './src/utils/link-redirects';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  redirects: linkRedirects,
  integrations: [tailwind(), react()],
});