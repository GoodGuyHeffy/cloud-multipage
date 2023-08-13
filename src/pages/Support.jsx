import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { BiSupport, BiChip } from 'react-icons/bi';
import supportImg from '../assets/support.png.jpg';






function Support() {
  return (
    <div className='w-full h-screen mt-24 absolute'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
          <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
        </div>


        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className=' text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Ipsa reprehenderit ea accusamus nesciunt, provident adipisci minus 
                     minima consequatur velit reiciendis! Sit non at molestias libero possimus
                      placeat aspernatur sapiente ipsam.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                <AiOutlinePhone className='bg-indigo-600 rounded-lg text-white mt-[-4rem] ' size={60}/>
                <h3 className='font-bold text-2xl my-6'>Sales</h3>
                <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem natus itaque
                     excepturi aspernatur, accusamus ullam!</p>
              </div>
              <div className='bg-slate-100 pl-8 py-4 '>
                <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRightShort size={20} /></p>
              </div>
            </div>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                <BiSupport className='bg-indigo-600 rounded-lg text-white mt-[-4rem] ' size={60}/>
                <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem natus itaque
                     excepturi aspernatur, accusamus ullam!</p>
              </div>
              <div className='bg-slate-100 pl-8 py-4 '>
                <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRightShort size={20} /></p>
              </div>
            </div>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                <BiChip className='bg-indigo-600 rounded-lg text-white mt-[-4rem] ' size={60}/>
                <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem natus itaque
                     excepturi aspernatur, accusamus ullam!</p>
              </div>
              <div className='bg-slate-100 pl-8 py-4 '>
                <p className='flex items-center text-indigo-600'>Contact Us <BsArrowRightShort size={20} /></p>
              </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Support;