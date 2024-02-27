import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div>
        <div className='home_leftsidebar'>
          <div className='home_admin_bar'>
            <p className='home_p'>ADMIN PANEL</p>
          </div>
          <div>
            <ul className='ul_left_panel'>
              <li><span></span> Brand Dashborad</li>
              <li><span></span> Merchants</li>
              <li><span></span> Brand Order</li>
              <li><span></span> Orders Payouts</li>
              <li><span></span> Brand Categories</li>
              <li><span></span> Operating Zone</li>
              <li><span></span> Marketing and Promotion</li>
              <li><span></span> Loyality Program</li>
              <li><span></span> Shipping and Runners</li>
              <li><span></span> Runner Payouts</li>
              <li><span></span> Enquiries</li>
              <li><span></span> Setting</li>
              <li><span></span> Web Setting</li>
            </ul>
          </div>
        </div>
    </div>
  )
}
