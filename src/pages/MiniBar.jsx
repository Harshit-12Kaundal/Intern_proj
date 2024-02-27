import React from 'react'
import "./minibar.css"
import { RxDoubleArrowRight } from "react-icons/rx";

export default function MiniBar() {
  return (
    <div className='main_nav_mini'>
        <div className='mini_nav'>
            <section className='home_nav'>Home</section>
            <span className='span_mini'><RxDoubleArrowRight /></span>
            <p>Web Pages section Content</p>
        </div>
            <div className='line_mini'></div>
    </div>
  )
}



