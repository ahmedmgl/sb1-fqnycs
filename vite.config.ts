import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sb1-fqnycs/', // Ajoutez ceci - doit correspondre au nom de votre dépôt
  plugins: [react()]
})
