import React from 'react'
import logo from "../../assets/Img/Logo.png"

const Nav = () => {
  return (
    <div>
       <div className='flex  bg-transparent justify-between absolute z-10 text-white w-screen'>
           <div className='w-full flex items-center '>
            <img src={logo} className='object-fit'/>
            <p className="text-[#12CC02] text-[32px] font-[700]">Serve +</p>
           </div>
           <div className='w-full flex items-center  gap-4 justify-start '>
            <p className='text-[30px] font-[400]'>Product</p>
            <p className='text-[30px] font-[400]'>Themes</p>
           </div>
           <div className='w-full  gap-8 flex items-center '>
            <p className='text-[20px] font-[700]'>Login</p>
            <p className='bg-white px-6 rounded py-2 text-black text-[20px] font-[700]'>Get Started</p>
           </div>
       </div>
    </div>
  )
}

export default Nav