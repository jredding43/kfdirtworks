import { defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
