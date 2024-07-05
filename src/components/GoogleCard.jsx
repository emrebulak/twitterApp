import logo from '../assets/logo.png';
import googleLogo from '../assets/google.png';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/config';

const GoogleCard = () => {

    const loginGoogle = async () => {
        // Google ile giriş yapma işlemi
        await signInWithPopup(auth, provider)
            .then((result) => {
                console.log('Result : ', result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <img width={60} src={logo} alt="Logo" />
            <h1 className='font-bold text-lg'>Twitter'a giriş yap</h1>
            <button onClick={loginGoogle} className='flex gap-4 items-center justify-center bg-white text-black px-10 py-2 rounded-full transition hover:bg-slate-300'>
                <img width={20} src={googleLogo} alt="Google Logo" />
                <span>Google ile Giriş Yap</span>
            </button>
        </>
    )
}

export default GoogleCard