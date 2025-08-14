import React from 'react'
import Button from './button'

const CTASection = () => {
    return (
        <section className='flex flex-col grid-rows-4 py-4  min-h-96 w-screen bg-gray-100'>
            <div className='row-span-2 flex flex-col justify-center py-3 px-5'>
                <img loading='lazy' src="images/Contact Us.svg" className=' w-screen' />
                <h3 className='text-[#29166F] font-bold text-center'>Need Expert Solutions You Can Trust?</h3>
            </div>
            <div className='flex justify-center items-center mt-2 mb-4'>
                <small className='w-96 text-center text-sm text-gray-500'>
                    ECPROD Nig Ltd is ready to bring your vision to life. From concept to completion, our team is here to support your goals with experience, innovation, and integrity.
                </small>
            </div>
            <div className="relative flex justify-center items-center w-full h-full">
                <div className="w-64 h-64 flex justify-center items-center border border-gray-500 rounded-full">
                    <div className="w-56 h-56 flex justify-center items-center border border-gray-500 rounded-full">
                        <div className="w-48 h-48 flex justify-center items-center border border-gray-500 rounded-full">
                            <div className="w-40 h-40 flex justify-center items-center border border-gray-500 rounded-full">
                                <div className="w-24 h-24 border border-gray-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 flex justify-center items-center z-50">
                    <Button text="Contact Us" arrow={true} />
                </div>
            </div>

        </section>
    )
}

export default CTASection