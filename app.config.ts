import { defineConfig } from "@solidjs/start/config";
import { resolve } from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the repository name for GitHub Pages
const BASE_URL = "/Sorting-Algorithm-Visualization"; // Adjust this to your repo name

export default defineConfig({
  ssr: true,
  server: {
    baseURL: BASE_URL,
    preset: "github-pages",
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
