import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for the build
    sourcemap: true, // Generate source maps for easier debugging
    minify: 'esbuild', // Use 'esbuild' for minification (default is 'terser')
    rollupOptions: {
      output: {
        // Customize the output settings
        entryFileNames: '[name].[hash].js', // Include hash in the filename for better caching
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
      },
    },
  },
});
