import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/perfil-design-embed/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
