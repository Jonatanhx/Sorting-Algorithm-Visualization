// app.config.ts
import { defineConfig } from "@solidjs/start/config";
var app_config_default = defineConfig({
  ssr: true,
  vite: {
    resolve: {
      alias: {
        "@": resolve_(__dirname, "./src")
      }
    },
    ssr: {
      external: ["@prisma/client"]
    }
  }
});
export {
  app_config_default as default
};
