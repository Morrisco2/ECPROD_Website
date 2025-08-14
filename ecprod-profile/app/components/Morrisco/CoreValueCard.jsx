import React from 'react'

const CoreValueCard = ({ cardTitle, cardText }) => {
    const cardDetails = [
        {
            cardTitle: "Quality & Excellence",
            cardText: "Setting the bar high and exceeding expectaitions."
        },
        {
            cardTitle: "Innovation & Adaptability",
            cardText: "Embracing change to lead to a dynamic world"
        },
        {
            cardTitle: "Integrity and Transparency",
            cardText: "Setting the bar high and exceeding expectaitions."
        },
        {
            cardTitle: "Client Success",
            cardText: "Because our success is measured by yours."
        },
        {
            cardTitle: "Integrity & Transparency",
            cardText: "Building trust through honesty and accountability"
        },
        {
            cardTitle: "Sustainabilty",
            cardText: "Balancing growth with long-term impact"
        },

    ]

    return (
        <div className='flex flex-wrap gap-2 justify-center '>
            {
                cardDetails.map((card, index) => {
                    return (
                        <div key={index} className='flex flex-col justify-center gap-4 pb-4 items-center text-center  h-48 w-48 py-5 px-5 bg-gray-200 text-black rounded-xl'>
                            <div className='flex justify-center items-center'><b>{card.cardTitle}</b></div>
                            <div>
                                <small className='font-thin flex justify-center items-center text-center text-black'>{card.cardText}</small>
                            </div>
                        </div>
                    )
                })

            }

        </div>

    )
}

export default CoreValueCard