import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import FooterList from "@/Components/FooterList";



export default function Dashboard(props) {
    const { auth } = usePage().props

    return (
        <AuthenticatedLayout

            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Страница Авторизованного пользователя:  {auth.user.name}!</h2>}
            footer={<h2 className="font-semibold text-xl text-gray-800 leading-tight">footer пользователя:  {auth.user.name}!</h2>}

        >
            <main>
            <Head title="Dashboard" />
<div  className="scroll-py-11">
            <div className="py-1">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm ">
                        <div className="p-6 text-gray-900">Привет:  {auth.user.name}!</div>
                    </div>
                </div>
            </div>

            <div className="py-1">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm ">
                        <div className="p-6 text-gray-900">Привет user {auth.user.name} твой  id: № {auth.user.id}!</div>
                    </div>
                </div>
            </div>
</div>
            </main>
            <footer className="font-semibold text-xl text-gray-500 leading-tight" >
                <FooterList></FooterList>
            </footer>

        </AuthenticatedLayout>
    );
}
