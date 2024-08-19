import React from 'react';
import { HERO_CONTENT } from "../constants/index.js";
import { motion } from "framer-motion";
import profilePic from '../assets/projects/ProfilePic.jpg';
import resume from '../assets/files/Mihir_Vaidya_Resume_SE_08_13_24.pdf';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

function HeroComponent() {
  return (
    <div className='border-b border-neutral-900 pb-12 lg:pb-20'>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:px-10">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)} 
              initial='hidden' 
              animate='visible' 
              className='text-5xl font-light tracking-tight text-center lg:text-left lg:text-7xl lg:mt-16'
            >
              Mihir Vaidya
            </motion.h1>
            <motion.span 
              variants={container(0.5)} 
              initial='hidden' 
              animate='visible' 
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl font-medium tracking-tight text-transparent my-6 lg:my-8 text-center lg:text-left'
            >
              Full Stack Developer
            </motion.span>
            <motion.a 
              variants={container(1)} 
              initial='hidden' 
              animate='visible' 
              href={resume} 
              download="Mihir_Vaidya_Resume.pdf" 
              className='inline-block bg-blue-500 text-white rounded-md px-6 py-3 text-lg font-light tracking-tight hover:bg-blue-600 transition duration-300 ease-in-out'
            >
              Download Resume
            </motion.a>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:px-10 mt-12 lg:mt-0'>
          <div className="flex justify-center lg:justify-end">
            <motion.img 
              initial={{ x: 100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 1.2 }} 
              src={profilePic} 
              alt="Mihir Vaidya" 
              className='rounded-full shadow-lg max-w-xs lg:max-w-sm'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;