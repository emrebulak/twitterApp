import { MdExitToApp } from 'react-icons/md'
import logo from '../assets/logo.png'
import links from '../constants/links'
import { useEffect, useState } from 'react'
import { auth } from '../firebase/config'
import person from '../assets/user.png'
import { toast } from 'react-toastify'
const Sidebar = () => {

    const [user, setUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    const handleExit = () => {
        auth.signOut().then(() => {
            toast.success('Çıkış yapıldı')
        }).catch((error) => {
            toast.error('Çıkış yapılırken hata oluştu : ' + error.message || 'Bilinmeyen bir hata oluştu')
        });
    }

    console.log("User : ", user)

    return (
        <nav className="border-r border-gray-500 p-4 flex flex-col items-end justify-between">
            <div className='cursor-pointer'>
                <img className='w-14 mb-4' src={logo} alt="logo" />
                <ul className='flex flex-col justify-center items-start gap-3'>
                    {
                        links.map((link, index) =>
                        (
                            <li key={index} className='max-sm:px-2 px-4 py-2 w-full flex gap-3 max-sm:justify-center items-center rounded-md hover:bg-[#505050b7] transition duration-300 max-sm:text-2xl text-xl'>
                                {link.icon}
                                <span className='max-sm:hidden'>{link.title}</span>
                            </li>
                        )
                        )
                    }
                </ul>
            </div>


            <div className='mr-4'>
                <img className='mb-3 rounded-full object-cover' width={56} src={user?.photoURL == null ? person : user?.photoURL} alt="user" />
                <button onClick={handleExit} className='flex  items-center max-sm:justify-center  gap-2 px-4 py-2 bg-[#505050b7] text-lg rounded-md transition hover:bg-[#505050e2]'>
                    <MdExitToApp className='max-sm:text-2xl text-xl' />
                    <span className='max-sm:hidden'>Çıkış Yap</span>
                </button>
            </div>

        </nav>
    )
}

export default Sidebar