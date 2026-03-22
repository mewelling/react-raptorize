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
    // {
    //   name: 'local-react-raptorize-jsx-in-js',
    //   async transform(code, id) {
    //     if (id === resolve(__dirname, '../src/index.js')) {
    //       const result = await transform(code, {
    //         loader: 'jsx',
    //         jsx: 'automatic',
    //         sourcemap: true,
    //         sourcefile: id,
    //       })
    //       return { code: result.code, map: result.map }
    //     }
    //     return null
    //   },
    // },
    react(),
  ],
  // resolve: {
  //   alias: {
  //     'react-raptorize': resolve(__dirname, '../src/index.js'),
  //   },
  // },
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
