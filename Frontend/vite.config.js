import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        proxy: {
          '/auth': {
            target: 'http://localhost:8800',
            changeOrigin: true,
          },
          '/pro': {
            target: 'http://localhost:8800',
            changeOrigin: true,
          },
          '/submit-otp': {
            target: 'http://localhost:8800',
            changeOrigin: true,
          },
         
        },
      },
  plugins: [react()],

});
