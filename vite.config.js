import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Pre-bundle modern dependencies
    include: [
      'ethers',
      'web3modal'
    ]
  },
  resolve: {
    alias: {
      // You can add other project-specific aliases here if needed
    }
  }
});
