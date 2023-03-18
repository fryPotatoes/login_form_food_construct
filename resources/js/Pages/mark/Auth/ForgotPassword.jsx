import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/mark/InputError';
import PrimaryButton from '@/Components/mark/PrimaryButton';
import TextInput from '@/Components/mark/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                Забыли свой пароль? Без проблем. Просто сообщите нам свой адрес электронной почты, и мы вышлем вам
                по электронной почте ссылку для сброса пароля, которая позволит вам выбрать новый.
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={onHandleChange}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Ссылка для сброса пароля электронной почты
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}