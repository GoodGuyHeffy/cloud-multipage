import React from 'react';
import { BsCloudUploadFill, BsServer } from 'react-icons/bs';
import { AiFillDatabase } from 'react-icons/ai';
import { FaPaperPlane } from 'react-icons/fa';
import cyberImg from '../assets/cyber.png';




function Hero() {



  return (
    <div className='w-full h-screen flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='text-2xl'>Unique Sequencing & Production</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
            <p className='text-2xl'>This is our Tech brand.</p>
            <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
        </div>
        <div>
        <img className='w-full' src={cyberImg} alt="/"/>
        </div>

        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
            <p className='font-bold text-lg'>Data Services</p>
            <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 text-slate-500'><BsCloudUploadFill className='text-indigo-600' size={25} /> App Security</p>
                <p className='flex px-4 py-2 text-slate-500'><AiFillDatabase className='text-indigo-600' size={25} /> Dashboard Design</p>
                <p className='flex px-4 py-2 text-slate-500'><BsServer className='text-indigo-600' size={25} /> Cloud Data</p>
                <p className='flex px-4 py-2 text-slate-500'><FaPaperPlane className='text-indigo-600' size={25} /> API</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;