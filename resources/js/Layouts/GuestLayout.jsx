
import ApplicationLogo from '@/Components/mark/ApplicationLogo';
import { Link } from '@inertiajs/react';
import FooterList from "@/Components/FooterList";

export default function Guest({ header, children,footer }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
                <div className=" space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <Link href="/home" className="w-20 h-20 fill-current text-red-400 " >"Home"</Link>
                    <Link href="/about" className="w-20 h-20 fill-current text-yellow-500  ">"О нас"</Link>
                    <Link href="/contact" className="w-20 h-20 fill-current text-green-500  ">"Контакты"</Link>
                </div>
            </div>



            {header && (
                <header className="bg-grey-100 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-green-500 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>

            {footer && (
                <footer className="bg-grey-100 shadow">
                    <div className="mr-2 flex items-center sm:hidden max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{footer}</div>
                </footer> && <footer className="flex justify-between h-16" >
                    <FooterList></FooterList>
                </footer>
            )}





        </div>
    );
}
