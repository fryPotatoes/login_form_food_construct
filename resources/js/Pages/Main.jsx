import { Link, Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
export default function Main(props) {
    return (
        <GuestLayout>
            <Head title="Main" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-1900 selection:bg-green-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {props.auth.user ? (

                        <Link href={route('dashboard')} className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"></Link>
                    ) : (<>
                            <Link href={route('login')} className="font-bold text-green-900 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                               Залогиниться
                            </Link>

                            <Link href={route('register')} className="ml-4 font-semibold text-blue-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                Зарегистрироваться
                            </Link>
                        </>
                    )}
                </div>
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-right">
                        <svg width="150px" height="150px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                             className="iconify iconify--noto" preserveAspectRatio="xMidYMid meet"><path   d="M55.88 32.41S17.4 43.11 14.4 47.24S6.23 59.02 5.76 75.4c-.38 13.14 6.95 46.93 42.98 48.05c36.79 1.15 50.49-23.09 57.06-38.1c5.92-13.54 5.82-29.09 9.57-36.23s7.13-13.33 6.95-21.4s-3.19-15.02-8.45-18.4c-5.26-3.38-9.76-2.82-12.01-3.38S55.88 32.41 55.88 32.41z"
                        fill="#757e40"/><path   d="M62.63 18.9c-15.96 6.57-37.17 12.76-47.3 27.03c-9.15 12.88-12.2 28.9.19 47.67c11.31 17.14 41.46 24.45 64.01 8.26c20.65-14.83 22.52-36.6 28.72-51.06s19.24-33.46 3.57-42.8c-16.71-9.94-36.58 5.71-49.19 10.9z"
                        fill="#afb42a"/><path   d="M108.25 12.14c-7.59-4.38-17.27-2.44-27.97 2.82s-18.96 9.2-22.71 10.51C53.81 26.78 21.87 38.48 15.71 54c-5.07 12.76-3.75 29.47 9.57 41.67s46.93 11.45 59.88-6.95s13.51-33.22 16.33-39.79s8.96-16.19 10.7-21.4c2.06-6.19.94-12.57-3.94-15.39z"
                        fill="#fff69d"/><path   d="M71.45 47.8c-6.01-7.13-28.91-4.88-36.79 6.38s-4.6 20.41-.75 25.34C38.6 85.53 51.37 90.97 63 82.9s15.04-27.28 8.45-35.1z"
                        fill="#855c52"/><path   d="M47.32 60.62c-2.96 4.34-1.48 11.34-6.57 11.67s-8.05-7.84-4.44-14.68c3.9-7.38 13.14-10.67 15.77-7.17c2.64 3.51-1.95 6.06-4.76 10.18z"
                        fill="#d67659"/>
                        </svg>

                    </div>
                </div>

            </div>



                <div className="mt-16">
                    <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-1900 selection:bg-green-500 selection:text-white">

                        <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                    Привет Stranger!
                        </h2>
                    </div>
                </div>


        </GuestLayout>
    );
}
