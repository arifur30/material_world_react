import React from 'react'
import pic from './assets/saima.jpg'
import { FaLinkedin } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Profile() {
  return (
    <div className='flex flex-col items-center justify-center border border-gray-700 py-3 px-2  border-2 rounded-md mx-2'>
      <div className=''>
      <img src={pic} alt='image'  className='w-[200px] h-[200px] rounded-full'/>

      </div>
     
    <div className='flex flex-col items-center justify-center py-2 gap-2 text-md'>
     
        <p className='font-bold'>Farhana Islam Saima</p>
        <p className='text-gray-600 font-bold text-md'>Worked In:Front end</p>
        <p className='font-bold text-gray-500 text-sm'>Technology Used:React,Tailwind,Axios</p>
        <p className='border-l-4 border-blue-500 p-2 font-bold text-lg text-gray-600 italic '>"I've worked in front end .Retrieved data from api and showed it. Also designed some pages. Happy to work."</p>
      </div>
     
      <div className='flex gap-2 text-3xl'>
        <FaLinkedin ></FaLinkedin>
        <CiGlobe></CiGlobe>
        <FaGithub></FaGithub>
      </div>

    </div>
  )
}
