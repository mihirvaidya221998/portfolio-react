import React from 'react';
import { Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

const NavbarComponent = () => {
  return (
    <Navbar className='mb-20 py-6'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex flex-shrink-0 items-center'>
          <span className='text-white text-xl font-semibold'>Mihir Vaidya</span>
        </div>
        <div className='flex items-center gap-4 text-2xl text-white'>
          <FaLinkedin />
          <FaGithub />
        </div>
      </div>
    </Navbar>
  )
}

export default NavbarComponent;