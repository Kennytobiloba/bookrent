import React, { useState, useEffect } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const menuResize = () => {
      const windowSize = window.innerWidth || document.body.clientWidth;
      if (windowSize > 640) {
        setNav(false);
      }
    };

    window.addEventListener('resize', menuResize);

    return () => {
      window.removeEventListener('resize', menuResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? 'fixed-nav ' : ''}  flex w-full ${nav ? 'flex-col' : 'flex-row'} transition-all duration-300`}>
      <div className={`w-full ${scrolling ? 'md:bg-pink-100 bg-gray-800 mb-0  ' : 'bg-black  md:bg-pink-50'} flex md:justify-center h-full justify-between md:p-8 px-4 py-4 items-center`}>
        <div className='gap-6 lg:text-[18px] text-[16px] font-bold md:flex hidden'>
        <Link to="/">  <h3 className='hover:text-red-400 cursor-pointer'>Home</h3></Link>
          <Link to="/category" className='hover:text-red-400 cursor-pointer'>Categories</Link>
          <h3 className='hover:text-red-400 cursor-pointer'>About</h3>
          <h3 className='hover:text-red-400 cursor-pointer'>Pages</h3>
          <h3 className='hover:text-red-400 cursor-pointer'>Blog</h3>
          <h3 className='hover:text-red-400 cursor-pointer'>Contact</h3>
        </div>
        <div className='flex md:hidden text-white'>
          {nav ? (
            <FaTimes className='text-[30px]' onClick={handleNav} />
          ) : (
            <FaBarsStaggered className='text-[30px]' onClick={handleNav} />
          )}
        </div>
      </div>
      
      {nav && (
        <div className='md:hidden text-start items-center'>
          <div className={`bg-gray-800 p-10 w-full ease-in-out duration-300 gap-6 lg:text-[18px] text-[16px] font-bold flex flex-col text-white justify-start transition-all overflow-hidden ${nav ? 'max-h-[60vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <Link to="/">  <h3 className='hover:text-red-400 cursor-pointer'>Home</h3></Link>
            <Link to="/category" className='hover:text-red-400 cursor-pointer'>Categories</Link>
            <h3 className='hover:text-red-400 cursor-pointer'>About</h3>
            <h3 className='hover:text-red-400 cursor-pointer'>Pages</h3>
            <h3 className='hover:text-red-400 cursor-pointer'>Blog</h3>
            <h3 className='hover:text-red-400 cursor-pointer'>Contact</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
