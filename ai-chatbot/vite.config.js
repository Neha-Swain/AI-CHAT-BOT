import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// dotenv.config();

// export default defineConfig({
//     plugins: [react()],
//     define: {
//         'import.meta.env.VITE_OPENAI_API_KEY': JSON.stringify(process.env.OPENAI_API_KEY || ''),
//     },
// });

export default defineConfig({
  plugins: [react()],
  root: ".", // Ensure Vite uses the project root
  publicDir: "public", // Ensure it knows where the public folder is
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "public/index.html", // Explicitly set entry module
    },
  },
  define: {
      'import.meta.env.VITE_OPENAI_API_KEY': JSON.stringify(process.env.OPENAI_API_KEY || ''),
  },
});