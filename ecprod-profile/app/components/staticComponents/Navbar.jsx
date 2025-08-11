'use client'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <nav className='grid w-screen bg-gray-200 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
      <div className='pl-3 py-2 w-50 bg-gray-200'>
        <img src="images/ECPROD Logo 1.svg" alt="logo" className='w-52' />
      </div>
      <div className='flex  justify-end items-center px-4 sm:flex md:hidden lg:hidden xl:hidden'>
        <p className="bg-[#009A3C] p-2 font-bold text-white rounded-md shadow-md">close</p>
      </div>
      <div className='bg-white md:rounded-tl-3xl lg:rounded-tl-3xl col-span-2 flex sm:justify-start md:justify-end lg:justify-end pr-4 items-center'>
        <ul className=' flex flex-col px-5 py-5 sm:px-5 sm:py-5 md:justify-between lg:justify-between md:items-center lg:items-center gap-2  sm:flex-col md:flex-row lg:flex-row '>
          <li><Link href="#" className='px-4 py-2 rounded-3xl bg-[#009A3C] text-white'>Home</Link></li>
          <li><Link href="#" className='px-4 py-2 rounded-3xl hover:bg-gray-200 hover:text-green-950 transition'>About Us</Link></li>
          <li><Link href="#" className='px-4 py-2 rounded-3xl hover:bg-gray-200 hover:text-green-950 transition'>Our Services</Link></li>
          <li><Link href="#" className='px-4 py-2 rounded-3xl hover:bg-gray-200 hover:text-green-950 transition'>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar