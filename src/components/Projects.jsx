import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className='my-20 text-center text-4xl'>Projects</motion.h2>
      <div className="">
        {PROJECTS.map((project, index) =>(
            <a 
            key={index} 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className='block mb-8 lg:flex lg:justify-center hover:bg-neutral-800 rounded-lg p-4 transition-colors duration-300'
          >
            <div key={index} className='flex flex-wrap mb-8 lg:justify-center'>
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4'>
                    <img width={150} height={150} className='mb-6 rounded' src={project.image} alt={project.title} />
                </motion.div>
                <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    {project.technologies.map((tech, index) =>(
                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
            </a>
        ))}
      </div>
    </div>
  )
}

export default Projects
