import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Menangani fallback untuk routing SPA
  },
  build: {
    outDir: "dist", // Atur output build ke folder 'dist'
  },
  base: "/", // Pastikan base path adalah '/'
});
