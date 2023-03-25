import {Link, Head, usePage} from '@inertiajs/react';
import Layout from '@/Pages/Layout';
import React from 'react';
import SimpleSlider from '../components/SimpleSlider';
export default function Main(auth) {
    return (
        <Layout>
            <Head title="Main" />

                    {auth.user ? (
                        <Link href={route('dashboard')} className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"></Link>
                    ) : (<>
                            <Link href={route('login')} className="font-bold text-green-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                               Залогиниться
                            </Link>

                            <Link href={route('register')} className="ml-4 font-semibold text-blue-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                Зарегистрироваться
                            </Link>
                        </>
                    )}

                <SimpleSlider></SimpleSlider>
        </Layout>
    );
}
