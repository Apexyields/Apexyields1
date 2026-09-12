import { defineConfig } from 'vite';
import obfuscator from 'vite-plugin-javascript-obfuscator';

export default defineConfig({
  build: {
    sourcemap: false,
    minify: 'esbuild'
  },
  plugins: [
    obfuscator({
      compact: true,
      controlFlowFlattening: true,
      identifierNamesGenerator: 'hexadecimal',
      stringArray: true,
      stringArrayThreshold: 0.75
    })
  ]
});
