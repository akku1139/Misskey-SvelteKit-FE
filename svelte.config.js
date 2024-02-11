import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      // Cf Pages SPA
      // https://developers.cloudflare.com/pages/configuration/serving-pages/#single-page-application-spa-rendering
      // Cf Pages _redirects
      // https://community.cloudflare.com/t/cloudflare-pages-proxy-redirect-not-working/482601
      fallback: "index.html",
    }),
  },
};

export default config;
