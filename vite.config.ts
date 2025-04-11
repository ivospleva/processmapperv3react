// vite.config.ts - Finální verze
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Tento import by nyní měl být platný díky @types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Explicitní konfigurace CSS s PostCSS
  css: {
    postcss: './postcss.config.js',
  },
  // Konfigurace aliasů (volitelná)
  // Pokud alias '@' nepotřebuješ, můžeš celou sekci 'resolve' smazat.
  // Proměnná '__dirname' by nyní měla být platná díky @types/node.
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Můžeš sem přidat další konfigurace Vite, pokud budeš potřebovat
  // Například konfigurace serveru:
  // server: {
  //   port: 5173, // Můžeš změnit port, pokud je potřeba
  //   strictPort: true, // Pokud je port obsazený, Vite se nespustí
  //   open: true, // Automaticky otevře prohlížeč po spuštění
  // }
})