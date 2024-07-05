import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config'

const MainGuard = () => {

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log("User : ", user)
        });
    }, [])



    return (
        <Outlet />
    )
}

export default MainGuard