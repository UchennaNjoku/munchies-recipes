import React from 'react';
import { GiKnifeFork } from 'react-icons/gi';
import { CgMenuRight } from "react-icons/cg";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {

  const [input, setInput] = useState("");

  const router = useRouter();

    const submitHandler = (e: React.FormEvent) => {
      e.preventDefault();
      router.push('/searched/' + input);
    };
  



  return (
    <nav className='text-black'  style={{ position: 'sticky', zIndex: 1000 }}>
    <div className="flex w-screen h-24 justify-between p-0 m-0 bg-white"> 
      <Link href="/" className="flex mr-4 md:mr-10 md:ml-10 items-center justify-start ml-7 p-0 no-underline" >
        <GiKnifeFork className='text-2xl'/>
        <h1 className='font-lobster font-medium text-3xl ml-1 mr-4'>Munchies</h1>
      </Link>
      <form className="flex max-w-2xl grow items-center" onSubmit={submitHandler}>
        <div className="relative w-full">
          <input type="text" placeholder='Search 10K+ Recipes' onChange= {(e) => setInput(e.target.value)} value={input} className=" h-9 grow bg-search-gray border border-gray-300 text-white font-poppins text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          <div className="sm:flex justify-end absolute hidden inset-y-0 right-2 mr-2 items-center pl-3 pointer-events-none">
            <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          </div>
        </div>
      
      </form>
      <div className='flex md:hidden mr-5 ml-5 text-xl p-0 bg-white justify-center items-center'>
        <div className="dropdown dropdown-end relative">
          <CgMenuRight className='text-3xl font-semibold m-1' tabIndex={0}/>
        
  
          <ul tabIndex={0} className="dropdown-content top-10 text-white absolute menu p-2 shadow bg-gray-500 rounded-box w-40 font-medium font-josefin">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='hidden bg-white md:flex items-center justify-center mx-4'>
        <Menu />
      </div>
    </div>
  </nav>
  )
}

function Menu() {
  return (
    <div className='bg-white'>
      <div className="md-flex">
        <ul className='flex font-medium font-josefin justify-center items-center '>
          <li className='mx-5'>
            <Link href="/about">About</Link>
          </li>
          <li className='mx-5'>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
