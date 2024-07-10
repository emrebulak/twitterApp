import React from 'react'
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Aside from '../components/Aside';

const Main = () => {

  return (
    <div className='main'>
       <Sidebar />
       <Feed />
       <Aside />
    </div>
  )
}

export default Main