import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <div className='flex flex-col items-center justify-center my-20'>
        <h2 className='text-center text-4xl mb-8'>About Me</h2>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className='max-w-3xl'
        >
          <p className='text-center my-2 py-6'>{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;