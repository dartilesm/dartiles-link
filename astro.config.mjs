import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import linkRedirects from './src/utils/link-redirects';

const isDevelopment = import.meta.env.VITE_IS_DEVELOPMENT;

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  redirects: isDevelopment ? linkRedirects : undefined,
  integrations: [tailwind(), react()],
});