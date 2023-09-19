import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='header__custom-container'>
        
        <Link to={`/`}>
          <button className='header__logo'></button>
        </Link>

        <h1 className='header__name'>Heroes browser</h1>
      </div>

      <Link to={`/create`}>
        <button className='header__create'>Create
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M7.58331 18.4166L18.4166 7.58331" stroke="#EE7828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.58331 7.58331H18.4166V18.4166" stroke="#EE7828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </Link>
    </div>
  )
}
