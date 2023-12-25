import React from 'react'
import Navbar from '@/components/Navbar';
import Image from 'next/image';

import aboutPic from '../images/about-pic.jpg';

const About: React.FC = () => {
  return (
    <div className='overflow-hidden min-h-screen text-black bg-white'>
        <Navbar />
        <div className='font-josefin flex flex-col lg:flex-row content-center md:ml-16 lg:ml-32 mx-5 mb-8 items-center'>
            <div className='flex flex-col items-center px-12 box-border max-w-xl'>
                <h2 className='font-bold text-xl mb-3'>Our Story</h2>
                <Image src={aboutPic} width={500} height={500} alt='About Image' className='rounded-xl'/>
            </div>
            <div className='mt-5 px-5 max-w-md xl:ml-16 2xl:ml-24 xl:text-lg'>
                <div className='mt-7 font-semibold mb-32  '>
                  A personal project of Uchenna Njoku, Munchies Recipes represents the &quot;everyone included&quot; philosophy. At Munchies we know 
                  that no matter where you are or who you are food is an important part of what makes you uniquely you. What better way to find yourself than through our plethora of delicious food from all around the world!
                </div>
                <hr className='font-bold'/>
                <div className=''>
                  enjoy food from all around the world. AT YOUR FINGERTIPS
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
