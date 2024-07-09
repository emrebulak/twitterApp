import { useFormik } from "formik";
import GoogleCard from "./GoogleCard"
import { LoginSchema } from "../constants/schema";
import Input from "./Input";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const LoginCard = ({ setIsSignUp }) => {

    const navigate = useNavigate()

    const handleChange = () => {
        setIsSignUp(true)
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            loginWithEmailAndPassword(values);
        },
    });


    const loginWithEmailAndPassword = async (values) => {
       await signInWithEmailAndPassword(auth, values.email, values.password)
            .then((res) => {
                console.log("Giriş Başarılı : ", res)
                toast.success("Giriş işlemi başarılı")
                navigate('/main')

            })
            .catch((err) => {
                toast.error(err.message)
            })
    }


    return (
        <div className='flex flex-col justify-center items-center gap-10 bg-black px-32 py-16 rounded-lg'>
            <GoogleCard />

            <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center gap-5 w-full'>

                <Input formik={formik} title='E-mail' name='email' type='text' />
                <Input formik={formik} title='Şifre' name='password' type='password' />

                <button disabled={!formik.isValid || !formik.dirty} type="submit" className='bg-white text-black py-1 w-full rounded-full font-bold transition hover:bg-slate-300 disabled:bg-slate-500'>Giriş Yap</button>

                <p className='flex gap-2 self-start'>
                    <span className='text-gray-500'>Hesabınız Yoksa</span>
                    <span onClick={handleChange} className='cursor-pointer text-blue-500 select-none'>Kayıt olun</span>
                </p>

            </form>
        </div>
    )
}

export default LoginCard