
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shadcn/ui': 'node_modules/@shadcn/ui/dist/index.js'
    },
  },
});
