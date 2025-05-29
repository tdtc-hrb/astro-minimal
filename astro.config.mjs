// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// baseName: com-vc, css-tws, blog-frontend, ops-win
export default defineConfig({
  site: "https://tdtc-hrb.github.io",
  base: "baseName",
  trailingSlash: 'ignore',
});
