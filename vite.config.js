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
        list_product: resolve(__dirname, "src/list_product.html"),
        list1_product: resolve(__dirname, "src/list1_product.html"),
        list2_product: resolve(__dirname, "src/list2_product.html"),
        list3_product: resolve(__dirname, "src/list3_product.html"),
        list4_product: resolve(__dirname, "src/list4_product.html"),
        item: resolve(__dirname, "src/item.html"),
        pay: resolve(__dirname, "src/pay.html"),
        cart: resolve(__dirname, "src/cart.html"),
        contact: resolve(__dirname, "src/contact.html"),
        signup: resolve(__dirname, "src/signup.html"),
        signin: resolve(__dirname, "src/signin.html"),
        blog: resolve(__dirname, "src/blog.html"),
          
      },
    },
  },
});
