import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  publicDir: "assets",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
        product: resolve(__dirname, "src/product.html"),
        product_item: resolve(__dirname, "src/product_item.html")
      },
    },
  },
});
