import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills(), wasm(), topLevelAwait()],
  base: ((process.env.GITHUB_REPOSITORY ?? "") + "/").match(/(\/.*)/)?.[1],
  optimizeDeps: {
    exclude: [
      "@syntect/wasm"
    ]
  },
  worker: {
    plugins: [
      wasm(),
      topLevelAwait()
    ]
  }
});
