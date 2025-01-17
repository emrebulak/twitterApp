import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config'

const MainGuard = () => {

    const [user, setUser] = useState()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {  
            setUser(user ? true : false);
        });
    }, [])

    if (user === false) {
        return <Navigate to={'/'} />
    }

    return (
        <Outlet />
    )
}

export default MainGuard