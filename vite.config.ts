// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Base path is '/' for root domain deployment
  base: '/yarsha-edu/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Only run componentTagger in development
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
