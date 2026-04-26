import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://thomas-luizon-portfolio.vercel.app",
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
});
