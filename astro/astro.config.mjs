import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import linkRedirects from './src/utils/link-redirects';

// https://astro.build/config
export default defineConfig({
  redirects: linkRedirects,
  integrations: [tailwind(), react()]
});