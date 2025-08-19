import React from 'react'
import Button from './Button'

const HomePageTitleCard = () => {
    const backgroundImage = {
        backgroundImage: `url('/images/Mask group.svg')`,
        backgroundPosition: "right",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
    }

    const professionalBgImage = {
        backgroundImage: `url('/images/professional-engineering-team-using-industry-40-software-smart-factory 1.svg')`,
        backgroundPosition: "bottom right", 
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
    }

    return (
        <section className="min-h-96 my-2 px-4 " >
            <div className="pl-4 h-auto grid grid-cols-1 lg:grid-cols-2" style={backgroundImage} >
                <div className="pl-2 pr-5 flex flex-col justify-center py-8">
                    <h1 className="font-bold text-4xl mb-3 text-[#29166F]">
                        Your Trusted Partner in Sustainable Development and Growth
                    </h1>
                    <small className="text-lg flex flex-wrap text-sm mb-8 text-gray-500">
                        ECPROD Nig Ltd is a multidisciplinary company delivering innovative solutions across civil engineering, construction, environmental management, and more.
                    </small>
                    <div className="flex gap-3 text-xs sm:text-sm md:text-sm lg:text-sm ">
                        <Button text="Contact Us" arrow={true} />
                        <Button text="Learn More" arrow={false} />
                    </div>
                </div>

                <div className="w-full h-60 sm:h-72 md:h-80 lg:h-full " style={professionalBgImage}/>
            </div>
        </section>
    )
}

export default HomePageTitleCard
