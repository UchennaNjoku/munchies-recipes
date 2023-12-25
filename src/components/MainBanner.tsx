import React from 'react';
import { FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'
import foodInPan from '../images/finalFood1.png'
//import foodInPan from '../images/tastyFood.png'


const MainBanner: React.FC = () => {
  return (
    <div className='flex relative flex-row bg-greenlanding h-fit'>
      <section className='text-white mt-14 sm:mt-32 md:mt-40 lg:mt-44 xl:mt-52 font-josefin flex flex-col relative w-screen'>
        <div className="tracking-tight text-white text-veryspecial sm:text-special md:text-special3 lg:text-special4 xl:text-8xl 2xl:text-9xl font-bold uppercase ml-8 md:ml-10 lg:ml-16">
          Food at <br className='md:hidden'/> your <br/><span className='text-orangelanding'>fingertips</span>
        </div>
        <div className="mt-10 md:mt-20 lg:mt-32 xl:mt-48 2xl:mt-56 mb-5 xl:mb-10 text-xs sm:text-special2  xl:text-xl italic flex flex-col self-start items-start ml-8 md:ml-10 lg:ml-16">
           <p>need a random recipe?<br/>look no further.</p>
          <div className="ml-10">
            <FaChevronDown />
          </div>
        </div>
      </section>
      <div style={{transform: 'translateX(30%)'}} className='absolute mt-5 2xl:mt-0 2xl:top--2 sm:mt-8 right-0 xl:right-20 w-2/3 xl:w-3/5'>
        <Image src={foodInPan} alt="MunchiesRecipes" width={500} className='object-cover h-full w-full'/>
      </div>
    </div>
  );
};

export default MainBanner;
