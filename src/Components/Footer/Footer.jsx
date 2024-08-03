import React from 'react'
import { asset } from '../../assets/data'
import { CiFacebook, CiYoutube ,CiLinkedin, CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='2xl:w-[80%] md:w-[96%]  sm:w-[96%] w-[98%] mx-auto lg:grid-cols-4 md:grid-cols-3
     grid-cols-1 sm:grid-cols-2  grid  lg:justify-center lg:items-center mt-20 lg:p-14 p-6 md:gap-12  text-blue-800'>
        
        <div className=' flex flex-col '> 
            <div className='lg:w-[90px] md:w-[40%] w-[30%]'>
            <img src={asset.Logo} alt="" className=' w-full h-full' />
            </div>
            <p className='w-[100%] mt-2 text-[14px]  md:text-[16px]' >Get the breathing space now, and we’ll extend 
                your term at the other end year for go.</p>
            <div className='flex gap-2 mt-4'>
          <div className='w-10 h-10 border border-gray-500 rounded-full
           hover:bg-red-700 p-2 flex items-center justify-center'>
          <CiFacebook className='text-[26px]' />
          </div>
          <div className='w-10 h-10 border border-gray-500 rounded-full
           hover:bg-red-700 p-2 flex items-center justify-center'>
          <CiYoutube className='text-[26px]' />
          </div>
          <div className='w-10 h-10 border border-gray-500 rounded-full
           hover:bg-red-700 p-2 flex items-center justify-cente'>
          <CiLinkedin  className='text-[26px]'/>
          </div>
          <div className='w-10 h-10 border border-gray-500 rounded-full
           hover:bg-red-700 p-2 flex items-center justify-cente'>
          <CiInstagram className='text-[26px]' />
          </div>
            </div>



        </div>
        

        <div>
            <h1 className='text-[20px] cursor-pointer mb-6 font-bold'>Book Category</h1>
            <h3 className='md:text-[16px] text-[14px] mb-4 cursor-pointer'>History</h3>
            <h3 className='md:text-[16px] text-[14px] mb-4 cursor-pointer'>Love Stories</h3>
            <h3 className='md:text-[16px] text-[14px] mb-4 cursor-pointer'>Science Fiction</h3>
            <h3 className='md:text-[16px] text-[14px] mb-4 cursor-pointer'>Business</h3>
        </div>

        <div>
            <h3 className='md:text-[16px] text-[14px] mb-4 cursor-pointer mt-10'>Biography</h3>
            <h3 className='md:text-[16px] text-[14px] mb-4 cursor-pointer'>Astrology</h3>
            <h3 className='md:text-[16px] text-[14px] mb-4 cursor-pointer'>Digital Marketing</h3>
            <h3 className='md:text-[16px] text-[14px] mb-4 cursor-pointer'>Software Development</h3>
            <h3 className='md:text-[16px] text-[14px] mb-4 cursor-pointer'>Ecommerce</h3>
        </div>

        <div>
          <h1 className='text-[20px] cursor-pointer mb-6 font-bold'>Site Map</h1>
            <h3 className='md:text-[16px] text-[14px] mb-4'>Home</h3>
            <h3 className='md:text-[16px] text-[14px] mb-4'>About Us</h3>
            <h3 className='md:text-[16px] text-[14px] mb-4'>FAQs</h3>
            <h3 className='md:text-[16px] text-[14px] mb-4'>Blog</h3>
            <h3 className='md:text-[16px] text-[14px] mb-4 cursor-pointer'>Contact</h3>
        </div>
    </div>
  )
}

export default Footer