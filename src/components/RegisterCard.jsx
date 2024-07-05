import { useFormik } from 'formik';
import GoogleCard from './GoogleCard';
import { LoginSchema } from '../constants/schema';
import Input from './Input';
import { createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase/config';
import { toast } from 'react-toastify';

const LoginCard = ({ setIsSignUp }) => {

    const handleChange = () => {
        setIsSignUp(false)
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            createWithEmailAndPassword(values);
        },
    });


    const createWithEmailAndPassword = async (values) => {
        await createUserWithEmailAndPassword (auth, values.email, values.password)
            .then((res) => {
                console.log("Kayıt Başarılı : ", res)
                toast.success("Kayıt işlemi başarılı")
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }

    return (
        <div className='flex flex-col justify-center items-center gap-10 bg-black px-32 py-16 rounded-lg'>
            <GoogleCard />

            <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center gap-8 w-full'>
                <Input formik={formik} title='E-mail' name='email' type='text' />
                <Input formik={formik} title='Şifre' name='password' type='password' />

                <button disabled={!formik.isValid || !formik.dirty} type='submit' className='bg-white text-black py-1 w-full rounded-full font-bold transition hover:bg-slate-300 disabled:bg-slate-500'>Kaydol</button>

                <p className='flex gap-2 self-start'>
                    <span className='text-gray-500'>Hesabınız Varsa</span>
                    <span onClick={handleChange} className='cursor-pointer text-blue-500 select-none'>Giriş Yapın</span>
                </p>

            </form>
        </div>
    )
}

export default LoginCard