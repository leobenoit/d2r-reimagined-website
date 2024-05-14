import { defineConfig } from "vite";
import aurelia from "@aurelia/vite-plugin";
import {viteStaticCopy} from "vite-plugin-static-copy";

export default defineConfig({
    server: {
        port: 9500,
        strictPort: true,
    },
    build: {
        target: ['chrome91', 'edge89', 'es2022', 'firefox90', 'safari15'],
        rollupOptions: {
            plugins: [ ],
        },
        outDir: 'docs',
        emptyOutDir: false,
    },
    plugins: [
        aurelia(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/assets',
                    dest: ''
                },
                {
                    src: 'talonrage',
                    dest: ''
                }
            ]
        })
    ],
});
