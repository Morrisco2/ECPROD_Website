import React from 'react'
import Button from './Button'

const Form = () => {
    return (
        <div className='flex justify-center flex-grow my-3'>
            <form action="" className='bg-gray-200 flex flex-col gap-4 rounded-2xl w-96 max-w-96 py-6 px-9 '>
                <legend className='text-lg font-bold text-[#29166F]'>Send Us a Message</legend>
                <div>
                    <input type="text" className='w-full h-9 text-sm bg-transparent outline-none border-b-2 border-gray-500 transition duration-100 ease-in hover:border-[#29166F]' placeholder='Full Name' />
                </div>
                <div>
                    <input type="email" className='w-full h-9 text-sm bg-transparent outline-none border-b-2 border-gray-500 transition duration-100 ease-in hover:border-[#29166F]' placeholder='Email Address' />
                </div>
                <div>
                    <input type="text" className='w-full h-9 text-sm bg-transparent outline-none border-b-2 border-gray-500 transition duration-100 ease-in hover:border-[#29166F]' id="" placeholder='Subject' />
                </div>
                <div>
                    <textarea name="" rows={3} className='w-full text-sm flex bg-transparent placeholder:items-center outline-none border-b-2 border-gray-500 transition duration-100 ease-in hover:border-[#29166F]' placeholder='Message'></textarea>
                </div>
                <div className='text-sm pt-3'>
                    <Button text="Send Message" arrow={true}  />
                </div>
            </form>
        </div>
    )
}

export default Form