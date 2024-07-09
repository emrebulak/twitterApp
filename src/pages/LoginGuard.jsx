import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config'

const LoginGuard = () => {

    const [user, setUser] = useState()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {  
            setUser(user ? true : false);
        });
    }, [])

    if (user === true) {
        return <Navigate to={'/main'} />
    }

    return (
        <Outlet />
    )
}

export default LoginGuard