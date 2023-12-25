import React from 'react'
import Navbar from '@/components/Navbar'
import MainBanner from '@/components/MainBanner'
import Picks from '@/components/Picks'

function index() {
  return (
    <div className='overflow-hidden min-h-screen bg-white'>
      <Navbar />
      <MainBanner />
      <Picks />
    </div>
  )
}

export default index