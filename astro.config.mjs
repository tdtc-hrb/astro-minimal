// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // site: "https://veic-2005.github.io",
  // baseName: minifilter
  site: "https://tdtc-hrb.github.io",

  // baseName: com-vc, css-tws, blog-frontend, ops-win, modern-cxx
  base: "baseName",

  trailingSlash: 'ignore',

  vite: {
    plugins: [tailwindcss()],
  },
});