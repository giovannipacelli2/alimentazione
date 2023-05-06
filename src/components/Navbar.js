import React from 'react'

import { Link } from 'react-router-dom';

const PATH = window.location.pathname.split(`/`)[1];

const Navbar = () => {
  return (
    <header className='header-navbar'>
      <nav>
        <Link to={`${PATH}/`}>home</Link>
        <Link to={`${PATH}/search`}>search</Link>
      </nav>
    </header>
  )
}

export default Navbar