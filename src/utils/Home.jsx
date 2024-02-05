import React from 'react'; 
import hero from '../assets/Img/hero.jpg'
const Home = () => {
  return (
    <div>
      <div className="  flex items-center text-white  h-screen  w-screen  hero ">
        <div className='flex flex-col items-center h-screen gap-4 w-screen overflow-hidden'>
            <img style={{height:"inherit"}}  src={hero} className='w-screen  flex object-c  '/>
             <div className=' absolute w-screen h-screen  flex flex-col bg-black/40 justify-center items-start  gap-4  p-8'>
                <p className='text-start text-[35px] text-white font-[700]'>Launch Your Dream Website in Minutes</p>
                <small className="font-[700] text-[48px]">Fueling social e-commerce dreams for entrepreneurs and business of all sizes</small>
                <p className="bg-white rounded py-2 px-4 font-[400] text-[35px] text-black ">GET STARTED </p>
               </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
