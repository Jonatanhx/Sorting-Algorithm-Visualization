// app.config.ts
import { defineConfig } from "@solidjs/start/config";
import { resolve } from "dns";
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
