import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
        preset: "smallest",
      },
    },
  },
  plugins: [react()],
});
