import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  root: '.',
  plugins: [basicSsl()],
  server: {
    port: 5173,
    // HTTPS so the iframe to https://dripemails.org/?agent=mobile is not blocked
    https: true,
  },
});
