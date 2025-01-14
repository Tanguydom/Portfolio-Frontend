import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Change ici le port (par exemple 4000)
    open: true,  // Ouvre automatiquement le navigateur
  },
});
