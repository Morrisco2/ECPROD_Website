'use client'
import React from 'react'
import PageTitleCard from '../components/Morrisco/PageTitleCard'
import CoreValueCard from '../components/Morrisco/CoreValueCard'
import useScrollAnimation from '../hooks/useScrollAnimation'


const About = () => {
  useScrollAnimation()

  return (
    <section className='min-h-screen my-16 '>
      <PageTitleCard imageName="AboutTitleCard.png" cardTitle="About Us" textColor="text-[#29166F]" />
      <div className='flex justify-center section'>
        <div className='my-24 text-center px-10 sm:px-10 md:px-16 lg:px-32'>
          <p className='align-middle'>
            ECPROD Nig Ltd is a Nigerian company built on a foundation of excellence, innovation, and integrity. With a long-standing history of delivering top-tier solutions across multiple sectors, we have grown into a reliable partner for government agencies, private enterprises, and international organizations alike.
          </p>
          <p>
            Since our inception, we’ve maintained one clear mission: to accelerate Nigeria’s infrastructural and economic development through comprehensive, high-quality services that combine technical precision with sustainable impact.
          </p>
        </div>
      </div>
      <div className='min-h-80 mb-24 px-4 section'>
        <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  pl-4 min-h-80 gap-3 rounded-xl flex justify-center flex-col bg-[#E4DFF4]`} >
          <div className='pr-14  flex flex-col justify-center'>
            <h1 className='text-3xl font-bold text-[#29166F] mb-5'>Our Legacy</h1>
            <small>We are not just builders of roads, bridges, and structures — we are architects of progress. Our multidisciplinary approach brings together industry-leading professionals in civil engineering, building construction, environmental management, project management, and beyond.</small>
            <small>
              With decades of hands-on experience, our team has successfully executed complex projects under diverse conditions. From major civil works in urban centers to grassroots community development programs, our projects stand as lasting symbols of our commitment to quality and impact.
            </small>
          </div>
          <div className='h-60 sm:h-72 md:h-80 lg:h-full'>
            <div className='m-2 h-56 sm:h-64 md:h-72 lg:max-h-full rounded-xl bg-transparent lg:m-5 ' style={{ backgroundImage: "url('images/Rectangle 22.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >

            </div>


          </div>

        </div>
      </div>

      <div className='min-h-80 mb-24 px-4 section'>
        <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  pl-4 min-h-80 gap-3 rounded-xl flex justify-center flex-col `} >
          <div className='h-60 sm:h-72 md:h-80 lg:h-full'>
            <div className='m-2 h-56 sm:h-64 md:h-72 lg:max-h-full rounded-xl bg-transparent lg:m-5 ' style={{ backgroundImage: "url('images/Rectangle 24.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >

            </div>


          </div>

          <div className='pl-10 flex flex-col justify-center'>
            <h1 className='text-3xl font-bold text-[#29166F] mb-5'>A Partner, Not Just a Provider</h1>
            <small>What sets ECPROD Nig Ltd apart is our deep commitment to long-term relationships. We engage every client with professionalism, transparency, and a solution-first mindset. Whether you’re a government ministry, corporate investor, or development partner, we treat your goals as our own — aligning our strategy with your vision to deliver lasting value.</small>

          </div>


        </div>
      </div>


      <div className='min-h-80 mb-24 px-4 section'>
        <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  pl-4 min-h-80 gap-3 rounded-xl flex justify-center flex-col bg-[#DFF8E9]`} >
          <div className='pr-10 flex flex-col justify-center'>
            <h1 className='text-3xl font-bold text-[#29166F] mb-5'>Driven by Sustainability</h1>
            <small>We believe that true development is not just measured in concrete and steel, but in the well-being of communities and the health of the environment. At every stage of our work — from design to delivery — we integrate sustainability principles, environmental stewardship, and social responsibility.</small>

          </div>
          <div className='h-60 sm:h-72 md:h-80 lg:h-full'>
            <div className='m-2 h-56 sm:h-64 md:h-72 lg:max-h-full rounded-xl bg-transparent lg:m-5 ' style={{ backgroundImage: "url('images/Rectangle 28.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >

            </div>


          </div>

        </div>
      </div>


      <div className='min-h-80 mb-24 px-4 section'>
        <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  pl-4 py-4 min-h-80 gap-3 rounded-xl flex justify-center flex-col bg-[#251362]`} >

          <div className='h-60 sm:h-72 md:h-80 lg:h-full'>
            <div className='flex items-center justify-center  m-2 h-56 sm:h-64 md:h-72 lg:max-h-full rounded-xl bg-transparent lg:m-5 md:justify-center lg:justify-start ' style={{ backgroundImage: "url('images/bob.png')", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "top", backgroundPosition: "left" }} >
              <h1 className='text-3xl font-bold text-white mb-5 text-center'>Driven by Sustainability</h1>

            </div>


          </div>

          <div className='pr-10 flex flex-col justify-center items-center'>
            <CoreValueCard />

          </div>


        </div>
      </div>

      <div className='flex justify-center section'>
        <div className='mb-24 text-center px-10 sm:px-10 md:px-16 lg:px-32'>
          <h1 className='text-3xl font-bold text-[#29166F] mb-5'>Looking Forward</h1>

          <p>
            As Nigeria continues to evolve, so do we. ECPROD Nig Ltd is constantly expanding its capacity, embracing emerging technologies, and nurturing local talent to meet the demands of tomorrow. We are ready - not just for the next project, but fot the future of infrastructure and development across Africa.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About