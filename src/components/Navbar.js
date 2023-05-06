import React from 'react'

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header-navbar'>
      <nav>
        <Link to='/'>home</Link>
        <Link to='/search'>search</Link>
      </nav>
    </header>
  )
}

export default Navbar