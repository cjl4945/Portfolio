import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import {logo , menu, close } from '../assets'
import MySvg from '../assets/logo-no-background.svg'


const Navbar = () => {
  const [active, setActive] = useState('')
  return (
    <nav
      className={`
      ${styles.paddingX} w-fill flex 
      items-center py-5 fixed top-0 z-2- 
      bg-primary`}
    >
      <div className="w-full flex justity-between 
      items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() =>{
            setActive('')
            window.scrollTo(0,0);
          }}
        >
          <img src={MySvg} alt="logo" className='w-9 
          h-9 object-contain'/>
        </Link>
      </div>
      </nav>
  )
}

export default Navbar