import { defineConfig } from "@solidjs/start/config";
import { resolve } from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  ssr: true,
  server: {
    baseURL: process.env.BASE_PATH,
    preset: "static",
  },
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    ssr: {
      external: ["@prisma/client"],
    },
  },
});
