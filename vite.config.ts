import { defineConfig } from 'vite';
import aurelia from '@aurelia/vite-plugin';

export default defineConfig({
    server: {
        port: 9500,
        strictPort: true,
    },
    publicDir: 'static',
    build: {
        minify: false,
        target: 'es2022',
        rollupOptions: {
            plugins: [],
        },
    },
    esbuild: {
        target: 'es2022',
    },
    plugins: [
        aurelia({ enableConventions: true, hmr: true }),
    ],
});