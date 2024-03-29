import React from 'react'

import { Link } from 'react-router-dom';

import {AiOutlineTable} from 'react-icons/ai';

import {IoListSharp} from 'react-icons/io5';
import {TbListSearch} from 'react-icons/tb';
import {MdOutlineDashboardCustomize} from 'react-icons/md';

/* const PATH = window.location.pathname.split(`/`)[1]; */
//const PATH = window.location.pathname;
const PATH = "/";


const Navbar = () => {
  return (
    <header className='header-navbar'>
      <nav>

        <Link to={`${PATH}`}>
          <span className="nav-icons">
            <TbListSearch className='nav-icon'/>
            <span className='icons-text'>Cerca</span>
          </span>
        </Link>

        <Link to={`${PATH}food`}>
          <span className="nav-icons">
            <IoListSharp className='nav-icon'/>
            <span className='icons-text'>Alimenti</span>
          </span>
        </Link>

        <Link to={`${PATH}summary`}>
          <span className="nav-icons">
            <AiOutlineTable className='nav-icon'/>
            <span className='icons-text'>Riepilogo</span>
          </span>
        </Link>


        <Link to={`${PATH}add`}>
          <span className="nav-icons">
            <MdOutlineDashboardCustomize className='nav-icon'/>
            <span className='icons-text'>Modifica</span>
          </span>
        </Link>

      </nav>
    </header>
  )
}

export default Navbar