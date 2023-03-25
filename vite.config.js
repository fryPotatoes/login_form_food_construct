import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
                input: ['resources/css/app.css','resources/css/recipe.css', 'resources/js/index.js','resources/js/index.jsx'],
                ssr: 'resources/js/ssr.js',
    refresh: true,
        }),
        react(),
    ],
});
