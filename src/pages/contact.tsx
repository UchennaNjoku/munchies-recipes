import React from 'react'
import Navbar from '@/components/Navbar';
import Image from 'next/image';

import contactPic from '../images/contact-pic.jpg';

const Contact: React.FC = () => {
    return (
      <div className='overflow-hidden min-h-screen text-black bg-white'>
            <Navbar />
            <div className='font-josefin flex flex-col lg:flex-row mx-5 mb-8 items-center'>
                <div className='flex flex-col items-center px-12 box-border max-w-xl'>
                    <h2 className='font-bold text-xl mb-3'>Say Hello!</h2>
                    <Image className='rounded-xl' width={500} height={500} src={contactPic} alt='Contact-Munchies' />
                </div>
                <div className='mt-5 px-5 max-w-md '>
                    <div className='mt-3 font-semibold mb-32  '>
                        Have a suggestion? Reach out to us via <span className='underline text-red-400'> <a href="mailto:uchenna.c.njoku@gmail.com"> email</a></span> or contact our founder on <span className='underline text-red-400'> <a href="https://www.linkedin.com/in/uchennanjoku/"> LinkedIn!</a></span>
                    </div>
                </div>
            </div>
      </div>
    )
  }
  
  export default Contact
  