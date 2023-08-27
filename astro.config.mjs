import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import react from "@astrojs/react";
import linkRedirects from './src/utils/link-redirects';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  redirects: linkRedirects,
  integrations: [tailwind(), react()],
  vite: {
    plugins: [
      commonjs({
        include: /node_modules/,
        extensions: ['.esm.js', '.js']
      }),
      nodeResolve()
    ]
  }
});