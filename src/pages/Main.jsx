import React from 'react'
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Aside from '../components/Aside';

const Main = () => {

  const handleQuit = () => {
    signOut(auth).then(() => {
      console.log('Çıkış yapıldı')
    }).catch((error) => {
      console.log('Çıkış yapılırken hata oluştu')
    });
  }
  
  return (
    <div className='main'>
       <Sidebar />
       <Feed />
       <Aside />
    </div>
  )
}

export default Main