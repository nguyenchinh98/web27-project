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
        item: resolve(__dirname, "src/item.html"),
        header: resolve(__dirname, "src/header.html"),
        pay: resolve(__dirname, "src/pay.html"),
        cart: resolve(__dirname, "src/cart.html"),
        contact: resolve(__dirname, "src/contact.html"),
        signup: resolve(__dirname, "src/signup.html"),
        signin: resolve(__dirname, "src/signin.html"),
      },
    },
  },
});
