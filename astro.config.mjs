// @ts-check
import { defineConfig } from 'astro/config';
import relativeLinks from 'astro-relative-links';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // site: "https://veic-2005.github.io",
  // baseName: minifilter
  site: "https://tdtc-hrb.github.io",

  // baseName: com-vc, css-tws, blog-frontend, ops-win, modern-cxx
  base: "baseName",

  trailingSlash: 'ignore',

  integrations: [relativeLinks()],

  vite: {
    plugins: [tailwindcss()],
  },
});