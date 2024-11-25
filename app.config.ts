import { defineConfig } from "@solidjs/start/config";
import { authVite } from "@solid-mediakit/auth-plugin";

export default defineConfig({
  ssr: true,
  vite: {
    ssr: {
      external: ["@prisma/client"],
    },
  },
});
