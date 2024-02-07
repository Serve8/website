import React from 'react'
import facebok from "../assets/Img/Ellipse 51.png"
import tweet from "../assets/Img/Ellipse 52.png"
import link from "../assets/Img/Ellipse 53.png"
import tik from "../assets/Img/Ellipse 54.png"
import inst from "../assets/Img/Ellipse 55.png"
import logo from "../assets/Img/Logo.png" 
import what from "../assets/Img/Ellipse 56.png"
const Footer = () => {
  return (
    <div style={{borderTop:"1px solid rgb(0 0 0 / 0.4)"}}>
              <div className=" flex py-8 px-4 place-items-center w-full h-full">
          <div className="flex justify-between w-full h-full">
              <div style={{height:"inherit"}} className="flex flex-col  w-full   justify-between" >
                  <div className="flex" >
                    <img src={logo} className='object-contain'  width={50} alt="" />
                    <p className='text-[34px] text-green-500 font-[800] '>Serve+ </p>
                  </div>
                  <div className="flex gap-8 text-black/50"> 
                        <p>© 2024 Serve + Inc.</p>
                        <p>Terms</p>
                        <p>Privacy</p>
                  </div>
              </div>
              <div className="flex flex-col justify-between gap-8 w-full text-black">
                <div className="flex justify-between" >
                  <div className="flex flex-col gap-7 w-full">
                      <div className="">
                        <h1>serve +</h1>
                      </div>
                      <div className="">
                            <p>Blog</p>
                            <p>Career</p>
                            <p>About us</p>
                            <p>Safety</p>
                      </div>
                  </div>
                  <div className="flex flex-col gap-7 w-full">
                      <div className="">
                        <h1>Get Help</h1>
                      </div>
                      <div className="">
                            <p>Payment Options</p>
                            <p>Contact us</p>
                            <p>Delivery</p> 
                      </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-start">
                  <div className="">
                      <p>join us on</p>
                  </div>
                  <div className="flex gap-4">
                        <img src={facebok}  width={50} alt="" />
                        <img src={tik}  width={50} alt="" /> 
                        <img src={link}  width={50} alt="" />
                        <img src={inst}  width={50} alt="" />
                        <img src={what}  width={50} alt="" />
                        <img src={tweet}  width={50} alt="" />
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
