// app.config.ts
import { defineConfig } from "@solidjs/start/config";
import { dirname } from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
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
