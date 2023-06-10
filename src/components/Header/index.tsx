import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'rsuite';
import logo from '../../assets/logo.jpeg';

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-center w-full'>
      <Navbar className='w-full h-40 !bg-white flex items-center shadow-md justify-between'>
        <div className='flex flex-row items-center w-full'>
          <img src={logo} alt='logo' className='w-[500px] h-32 mr-12' />
          <Nav>
            <Link to='/' className='mr-6' style={{ textDecoration: 'none' }}>
              <span className='xl:text-2xl lg:text-xl text-black-100'>
                Головна
              </span>
            </Link>
            <Link
              to='/documents'
              className='mr-6 no-underline'
              style={{ textDecoration: 'none' }}
            >
              <span className='xl:text-2xl lg:text-xl text-black-100'>
                Документи
              </span>
            </Link>
          </Nav>
        </div>
        <Nav>
          <div className='flex flex-col justify-end w-full mr-12 shadow-md p-4'>
            <span className='text-lg font-semibold'>UAH</span>
            <div>
              <span className='text-lg font-semibold'>IBAN: </span>
              <span>UA033052990000026004020126156</span>
            </div>
            <div>
              <span className='text-lg font-semibold'>Код ЄДРПОУ: </span>
              <span>34845709</span>
            </div>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
};

export { Header };
