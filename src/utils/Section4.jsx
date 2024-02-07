import React from 'react'
import ap from "../assets/Svg/Approval.png"
import sect from "../assets/Img/section3.png"
const Section4 = () => {
  return (
    <div className='my-12'>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}} className='p-10 gap-7'>
        <div className='flex flex-col justify-center  items-center  gap-8'>
             <div className='text-[40px] font-[500]'> 
                <h1>Take your website to the next level</h1>
             </div>
             <div className='flex flex-col items-start' > 
                <div className='flex items-start'>
                  <span><img src={ap} width={40}/></span>
                  <p>Customize your store to your branding</p>
                </div>
                <div className='flex items-start'>
                <span><img src={ap} width={40}/></span>
                  <p>Unlock growth through store partnerships </p>
                </div>
                <div className='flex items-start'>
                <span><img src={ap} width={40}/></span>
                  <p>Make sales from our vast marketplace</p>
                </div>
             </div>
             <div className='border  border-black px-4 py-2'>
                   Open your store
             </div>
        </div>
        <div className='bg-[#FECEF9] px-8 py-12 flex justify-center'>
            <img src={sect} className='object-contain w-[50%]'/>
        </div>
      </div>
    </div>
  )
}

export default Section4
