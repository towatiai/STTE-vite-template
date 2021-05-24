import svelte from "@sveltejs/vite-plugin-svelte";

import { join } from 'path';

const srcRoot = join(__dirname, 'src');

export default ( command => {
  // DEV
  if (command === 'serve') {
    return {
      base: '/',
      plugins: [svelte()],
      alias: {
        '/@': srcRoot,
      },
      build: {
        outDir: join(srcRoot, '/out'),
        emptyOutDir: true,
        rollupOptions: {},
      },
      server: {
        port: process.env.PORT === undefined ? 3000 : +process.env.PORT,
      },
      optimizeDeps: {
        auto: true,
        exclude: ['path'],
      },
    };
  }
  // PROD
  else {
    return {
      base: `${__dirname}/src/out/`,
      plugins: [svelte()],
      alias: {
        '/@': srcRoot,
      },
      build: {
        outDir: join(srcRoot, '/out'),
        emptyOutDir: true,
        rollupOptions: {},
      },
      server: {
        port: process.env.PORT === undefined ? 3000 : +process.env.PORT,
      },
      optimizeDeps: {
        auto: true,
        exclude: ['path'],
      },
    };
  }
});
