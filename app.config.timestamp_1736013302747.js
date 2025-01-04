// app.config.ts
import { defineConfig } from "@solidjs/start/config";
import { resolve } from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var app_config_default = defineConfig({
  ssr: true,
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
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
