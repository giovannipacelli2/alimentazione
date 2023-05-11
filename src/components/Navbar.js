import React from 'react'

import { Link } from 'react-router-dom';

import {AiOutlineHome} from 'react-icons/ai';
import {TbListSearch} from 'react-icons/tb';
import {MdOutlineDashboardCustomize, MdOutlineDataset} from 'react-icons/md';

const PATH = window.location.pathname;

const Navbar = () => {
  return (
    <header className='header-navbar'>
      <nav>

        <Link to={`${PATH}/`}>
          <span className="nav-icons">
            <AiOutlineHome/>
            <span className='icons-text'>Home</span>
          </span>
        </Link>

        <Link to={`${PATH}/summary`}>
          <span className="nav-icons">
            <MdOutlineDataset/>
            <span className='icons-text'>Riepilogo</span>
          </span>
        </Link>

        <Link to={`${PATH}/search`}>
          <span className="nav-icons">
            <TbListSearch/>
            <span className='icons-text'>Cerca</span>
          </span>
        </Link>

        <Link to={`${PATH}/add`}>
          <span className="nav-icons">
            <MdOutlineDashboardCustomize/>
            <span className='icons-text'>Modifica</span>
          </span>
        </Link>

      </nav>
    </header>
  )
}

export default Navbar