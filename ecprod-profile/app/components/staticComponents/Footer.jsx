import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className='mx-5 bg-[rgb(15,8,43)] rounded-tr-3xl rounded-tl-3xl' >
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  p-5  text-white'>

        <div className='col-span-2 flex flex-col justify-between pr-20 pb-4 '>
          <div className='w-50 '>
            <img src="images/ECPROD Logo white 1.svg" alt="logo" className='w-52' />
          </div>
          <div className='mt-4 sm:mt-4 sm:mb-6 md:mb-6 lg:mb-0 md:mt-4 lg:mt-0 '>
            <b>Get in Touch</b>
            <p className='text-gray-400 text-sm'><small> Whether you're planning a major infrastructure project or seeking expert training solutions, we’re ready to partner with you.</small></p>

          </div>

        </div>
        <div className='col-span-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
          <div className='mb-6 sm:mb-6 md:mb-6 lg:mb-0'>
            <b>Company</b>
            <ul className='mt-2 flex flex-col gap-1 text-sm text-gray-400'>
              <li><Link href="#" className='hover:text-gray-300 transition duration-200 ease-in'><small>About Us</small></Link></li>
              <li><Link href="#" className='hover:text-gray-300 transition duration-200 ease-in'><small>Training Programs</small></Link></li>
            </ul>
          </div>
          <div className='pr-1 mb-6 sm:mb-6 md:mb-6 lg:mb-0'>
            <b className=''>Services</b>
            <ul className='mt-2 text-sm flex flex-col gap-1 text-gray-400'>
              <li><Link href="#" className='hover:text-gray-300 transition duration-200 ease-in'><small>Civil Works</small> </Link></li>
              <li><Link href="#" className='hover:text-gray-300 transition duration-200 ease-in'><small>Building & Civil Engineering</small></Link></li>
              <li><Link href="#" className='hover:text-gray-300 transition duration-200 ease-in'><small>Environmental Management</small></Link></li>
              <li><Link href="#" className='hover:text-gray-300 transition duration-200 ease-in'><small>Skill Training</small></Link></li>
              <li><Link href="#" className='hover:text-gray-300 transition duration-200 ease-in'><small>Project Management</small></Link></li>
              <li><Link href="#" className='hover:text-gray-300 transition duration-200 ease-in'><small className='inline '>View all <FaArrowRight size={12} className='inline ml-1'/> </small></Link></li>
            </ul>
          </div>
          <div className='mb-6 sm:mb-6 md:mb-6 lg:mb-0'>
            <b>Contact</b>
            <div className='mt-2 text-sm flex flex-col gap-1 text-gray-400'>
              <p ><small>Rumunduru, Oro-Igwe Rd, Port Harcourt</small></p>
              <p><small>ecprod-nigltd@proton.me</small></p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center border-t-2 border-gray-400 mt-3 py-3 '>
        <p className='text-gray-400 text-sm '>© ECPROD NIGERIA LTD. 2025</p>
      </div>
    </footer>
  )
}

export default Footer