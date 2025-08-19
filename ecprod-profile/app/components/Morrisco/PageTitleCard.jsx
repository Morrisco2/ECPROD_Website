import React from 'react'

const PageTitleCard = ({ imageName, cardTitle, cardText, textColor = "text-white" }) => {
    const pageTitleCSS = {
        backgroundImage: `url('images/${imageName}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }

    return (
        <section className='h-96 my-2 px-4'>
            <div 
                className={`pl-4 h-96 gap-3 rounded-xl flex justify-center flex-col ${textColor}`} 
                style={pageTitleCSS}
            >
                <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl">
                    {cardTitle}
                </h1>
                <p className="text-lg flex flex-wrap w-80">{cardText}</p>
            </div>
        </section>
    )
}

export default PageTitleCard
