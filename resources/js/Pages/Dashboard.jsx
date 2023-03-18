import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';



export default function Dashboard(props,children) {
    const { auth } = usePage().props

    return (
        <AuthenticatedLayout
            time={props.time}
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Страница Авторизованного пользователя:  {auth.user.name}!</h2>}
        >
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
                        <div className="p-6 text-gray-900">Привет!</div>
                    </div>
                </div>
            </div>
</div>

            <footer>


            </footer>

        </AuthenticatedLayout>
    );
}
