import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { manifestForPlugin } from "./manifest";

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
  build: {
    sourcemap: true,
  },
});
