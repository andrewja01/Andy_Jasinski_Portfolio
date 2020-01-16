import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <div>
    <nav
      className='nav navbar navbar-expand-lg navbar-light'
      style={{ background: '#b91bf70a' }}
    >
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarTogglerDemo03'
        aria-controls='navbarTogglerDemo03'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <span className='navbar-brand' id='brand' href={this}>
        Andrew Jasinski
      </span>

      <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
        <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
          <li className='nav-item active'>
            <button className='nav-link btn btn-secondary' href=''>
              Projects <span className='sr-only'>(current)</span>
            </button>
          </li>
          <li className='nav-item'>
            <button className='nav-link btn btn-secondary' href=''>
              Contact Me
            </button>
          </li>
        </ul>

        <form className='form-inline my-2 my-lg-0'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          ></input>
          <button
            className='btn btn-outline-secondary my-2 my-sm-0'
            type='submit'
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
);

export default Navbar;
