import { useState } from 'react';
import LoginCard from '../components/LoginCard';
import RegisterCard from '../components/RegisterCard';

const Login = () => {

    const [isSignUp, setIsSignUp] = useState(false);

    return (

        <div className='h-screen flex flex-col justify-center items-center'>
            {
                isSignUp ? <RegisterCard setIsSignUp={setIsSignUp} /> : <LoginCard setIsSignUp={setIsSignUp}/>
            }
        </div>

    )
}

export default Login