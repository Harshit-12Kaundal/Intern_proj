import React from 'react'
import "./home.css"
import Navbar from './Navbar'
import Form from './Form'
import Sidebar from './Sidebar'
import MiniBar from './MiniBar'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className='main_div'>
        <Sidebar/>
        <div className='home_rightsidebar'>
          <Navbar/>
          <MiniBar/>
          <Form/>
        </div>
    </div>
  )
}
