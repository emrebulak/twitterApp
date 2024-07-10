import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Aside from '../components/Aside';

const Main = () => {

  const [count, setCount]= useState(0);

  return (
    <div className='main'>
       <Sidebar />
       <Feed setCount={setCount} />
       <Aside count={count} />
    </div>
  )
}

export default Main