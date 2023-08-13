import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaXmark} from 'react-icons/fa6';




function NavBar() {

   const [nav, setNav] = useState(false);
   const handleClick = () => setNav(!nav);
   const navigate = useNavigate();



  return (
    <>
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg cursor-pointer'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>CloudMGMT</h1>
            <ul className='hidden md:flex'>
              <Link to ='/'><li>Home</li></Link>
              <Link to ='/about'><li>About</li></Link>
              <Link to ='/support'><li>Support</li></Link>
              <Link to ='/allinone'><li>Platforms</li></Link>
              <Link to ='/pricing'><li>Pricing</li></Link>
            </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>

        <div onClick={handleClick} className='md:hidden mr-5'>
            {!nav ? <FaBars size={30}/> : <FaXmark size={30} />}
        
        </div>

      </div>



       <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
       <Link to ='/'><li>Home</li></Link>
       <Link to ='/about'><li className='border-b-2 border-zinc-300 w-full'>About</li></Link>
       <Link to ='/support'><li className='border-b-2 border-zinc-300 w-full'>Support</li></Link>
       <Link to ='/allinone'><li className='border-b-2 border-zinc-300 w-full'>Platforms</li></Link>
       <Link to ='/pricing'><li className='border-b-2 border-zinc-300 w-full'>Pricing</li></Link>
              <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
              </div>
       </ul>

    </div>
    </>
  )
}

export default NavBar;