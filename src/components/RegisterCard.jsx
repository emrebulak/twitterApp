import logo from '../assets/logo.png';
import googleLogo from '../assets/google.png';

const LoginCard = ({ setIsSignUp }) => {

    const handleChange = () => {
        setIsSignUp(false)
    }

    return (
        <div className='flex flex-col justify-center items-center gap-10 bg-black px-32 py-16 rounded-lg'>
            <img width={60} src={logo} alt="Logo" />
            <h1 className='font-bold text-lg'>Twitter'a giriş yap</h1>
            <button className='flex gap-4 items-center justify-center bg-white text-black px-10 py-2 rounded-full transition hover:bg-slate-300'>
                <img width={20} src={googleLogo} alt="Google Logo" />
                <span>Google ile Giriş Yap</span>
            </button>

            <div className='flex flex-col justify-center items-center gap-8 w-full'>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="emailInp">Email</label>
                    <input autoComplete="off" name='email' className='p-2 rounded border-none outline-none text-black transition focus:shadow-white focus:shadow-md' type="text" />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="emailInp">Şifre</label>
                    <input autoComplete="off" name='password' className='p-2 rounded border-none outline-none text-black transition focus:shadow-white focus:shadow-md' type="password" />
                </div>

                <button className='bg-white text-black py-1 w-full rounded-full font-bold transition hover:bg-slate-300'>Kaydol</button>

                <p className='flex gap-2 self-start'>
                    <span className='text-gray-500'>Hesabınız Varsa</span>
                    <span onClick={handleChange} className='cursor-pointer text-blue-500 select-none'>Giriş Yapın</span>
                </p>

            </div>
        </div>
    )
}

export default LoginCard