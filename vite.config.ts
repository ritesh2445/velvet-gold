import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  plugins: [tanstackStart(), netlify(), viteReact(), tailwindcss(), tsConfigPaths()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
