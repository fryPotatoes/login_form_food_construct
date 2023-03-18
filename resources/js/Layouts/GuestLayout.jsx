
import ApplicationLogo from '@/Components/mark/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <Link href="/home" className="w-20 h-20 fill-current text-red-400 " >"Домашняя страница"</Link>
                    <Link href="/about" className="w-20 h-20 fill-current text-yellow-500  ">"О нас"</Link>
                    <Link href="/contact" className="w-20 h-20 fill-current text-green-500  ">"Контакты"</Link>
                </div>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-green-500 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
