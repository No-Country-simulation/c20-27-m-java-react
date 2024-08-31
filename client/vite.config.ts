import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: ".",
  envDir: ".",
  publicDir: "./public",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "./dist",
  },
})
