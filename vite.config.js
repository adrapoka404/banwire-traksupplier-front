import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

export default defineConfig({
  plugins: [react()],
});
