import React from 'react';
import { RiReactjsLine, RiNodejsLine, RiAngularjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql, BiLogoDjango } from "react-icons/bi";

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-7xl text-green-400'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiAngularjsFill className='text-7xl text-red-500'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className='text-7xl text-sky-700'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiNodejsLine className='text-7xl text-green-500'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoDjango className='text-7xl text-green-700'/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
