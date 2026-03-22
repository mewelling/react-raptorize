import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { transform } from 'esbuild'

/*
This is a workaround to allow the use of JSX in the react-raptorize package.
We need to fix the build process to allow for JSX in the react-raptorize package.
*/

export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    fs: {
      allow: [resolve(__dirname, '..')],
    },
  },
})
