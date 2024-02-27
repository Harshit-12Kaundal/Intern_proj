import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className='main_navbar'>
      <div className='main_main_div'>
        <div className=''>
          <span className='hamburger_icon'><IoIosMenu/></span>
        </div>
        <div className='div_icons'>
          <p className='main_icon_navbar'>FoodBazar</p>
        </div>
      </div>
      <div className='second_main_div'>
        <div>
          <span className='bell_icon'><FaBell/></span>
        </div>
        <div>
          <span className='span_kabir'>Kabir</span>
        </div>
      </div>
    </div>
  )
}
