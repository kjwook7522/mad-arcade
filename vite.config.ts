import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const APP_PREFIX = "MAD_ARCADE_";

export default defineConfig(({ mode }) => ({
  plugins: [react()],

  base: loadEnv(mode, process.cwd(), APP_PREFIX).MAD_ARCADE_BASE_URL,

  server: {
    host: "localhost",
    port: 8080,
  },

  preview: {
    host: "localhost",
    port: 8081,
  },

  resolve: {
    alias: {
      "@App": path.join(__dirname, "src"),
    },
  },
  envPrefix: APP_PREFIX,
  clearScreen: false,
}));
