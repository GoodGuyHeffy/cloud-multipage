import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {

    const navigate = useNavigate();



  return (
    <>
    <div className='w-screen h-screen'>
    <div className='w-full my-44 absolute'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl md:text-7xl font-bold'>Trusted by developers across the world</h2>
                <p className='text-3xl py-6 text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Molestias doloremque, explicabo itaque quia quaerat unde ullam
                      enim molestiae, illo dolor blanditiis vero, eos minima provident
                       id voluptate tempora aliquam expedita.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-2 px-2 text-center'>
                <div className='border py-8 rounded-xl  shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div className='border py-8 rounded-xl  shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl  shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>100k</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>
            </div>
        </div>
    </div>
    
    </div>
    </>
  )
}

export default About;