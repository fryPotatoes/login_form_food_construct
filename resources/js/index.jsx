import './bootstrap';
import '../css/app.css';
// import '../css/recipe.css';

import { createRoot } from 'react-dom/client';
// import { hydrateRoot } from 'react-dom/client';
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
InertiaProgress.init()
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        // const root = hydrateRoot(el);
        const root = createRoot(el);
        root.render(<App {...props} />);

    },
    progress: {
        color: '#4B5563',
    },
});

//
// import { createInertiaApp } from '@inertiajs/react'
// // import { createRoot } from 'react-dom/client'
// import { hydrateRoot } from 'react-dom/client'
//
// createInertiaApp({
//     resolve: name => {
//         const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
//         return pages[`./Pages/${name}.jsx`]
//     },
//     setup({ el, App, props }) {
//         // createRoot(el).render(<App {...props} />)
//         hydrateRoot(el, <App {...props} />)
//     },
// })
