import './bootstrap';
import '../css/back/app.css';
// import '../css/recipe.css';

// import { createRoot } from 'react-dom/client';
// // import { hydrateRoot } from 'react-dom/client';
// import { InertiaProgress } from '@inertiajs/progress'
// import { createInertiaApp } from '@inertiajs/react';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// InertiaProgress.init()
// const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
//
// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,
//     resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
//     setup({ el, App, props }) {
//         // const root = hydrateRoot(el);
//         const root = createRoot(el);
//         root.render(<App {...props} />);
//
//     },
//     progress: {
//         color: '#4B5563',
//     },
// });


import { createInertiaApp } from '@inertiajs/react'
// import { createRoot } from 'react-dom/client'
import { hydrateRoot } from 'react-dom/client'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
    },
    setup({ el, App, props }) {
        // createRoot(el).render(<App {...props} />)
        hydrateRoot(el, <App {...props} />)
    },
})

//
// import React from 'react';
// import ReactDOM from "react-dom/client";
//
// import { createInertiaApp } from '@inertiajs/react'
// import { createRoot } from 'react-dom/client'
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import PersonalAccount from "./Pages/PersonalAccount";
// import {NotFound} from "./Pages/NotFound";
// import Layout from "./Pages/Layout";
// import Home from "./Pages/Home";
// import Recipes from "./Pages/Recipes";
// import Form from "./Pages/Form";
// import Advice from "./Pages/Advice";
// import Recipe from "./Pages/Recipe";
//
//
//
// function App() {
//     const router = createBrowserRouter([
//         {
//             path: '/',
//             element: <Layout />,
//             children: [
//                 {
//                     path: "/",
//                     element: <Home />,
//                 },
//
//                 {
//                     path: "/recipe",
//                     element: <Recipe />,
//                 },
//
//                 {
//                     path: "/recipes/*",
//                     element: <Recipes />,
//                 },
//                 {
//                     path: "/builder",
//                     element: <MenuBuilder />,
//                 },
//
//                 {
//                     path: "/form",
//                     element: <Form />,
//                 },
//                 {
//                     path: "/advice",
//                     element: <Advice />,
//                 },
//                 {
//                     path: "/menu",
//                 },
//                 {
//                     path: "/account",
//                     element: <PersonalAccount />,
//                 },
//                 {
//                     path: "/recipes/:categoryId/*",
//                     element: <Recipes />,
//                 },
//             ],
//         },
// //Страница 404 должна быть без Footer и Header
//         {
//             path: "/*",
//             element: <NotFound />,
//         },
//     ])
//     return (
//         <div className='app'>
//             <RouterProvider router={router}></RouterProvider>
//         </div>    )
// }
// export default App;
//
// createInertiaApp({
//     resolve: name => {
//         const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
//         let page = pages[`./Pages/${name}.jsx`]
//         page.default.layout = page.default.layout || (page => <Layout children={page} />)
//         return page
//     },
//     setup({ el, App, props }) {
//         createRoot(el).render(<App {...props} />)
//     },
// })


// const root = ReactDOM.createRoot(document.getElementById('root'));root.render(<App />);
