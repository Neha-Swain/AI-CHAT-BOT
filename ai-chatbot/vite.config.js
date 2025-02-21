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
  define: {
      'import.meta.env.VITE_OPENAI_API_KEY': JSON.stringify(process.env.OPENAI_API_KEY || ''),
  },
  build: {
    rollupOptions: {
      input: "public/index.html", // Make Vite look in public/
    },
  },
});