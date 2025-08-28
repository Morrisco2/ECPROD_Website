import useScrollAnimation from '@/app/hooks/useScrollAnimation'
import React from 'react'

const LeadershipCard = () => {
    useScrollAnimation()
    const cardDetails = [
        {
            cardImage: "images/leadership.png",
            cardTitle: "Leadership and Team",
            cardText: " Guided by a visionary leadership team, ECPROD Nig Ltd is fuelled by a team of seasoned professionals, each an expert in their respective field. Our collective expertise, combined with a passion for innovation, drives us to consistently deliver outstanding results."
        },
        {
            cardImage: "images/commitment.png",
            cardTitle: "Commitment to Sustainability",
            cardText: "As stewards of the environment, we prioritize sustainability in every endeavour. Our Environmental Management services reflect our dedication to harmonizing progress with environmental responsibility, creating a brighter future for generations to come."
        },
        {
            cardImage: "images/globe2.jpg",
            cardTitle: "Global Reach",
            cardText: "With a global perspective, ECPROD Nig Ltd embraces the challenges and opportunities of a connected world. Our Import and Export services seamlessly bridge international boundaries, enabling clients to expand their horizons with confidence."
        }
    ]

    return (
        <section className='flex flex-wrap gap-6 justify-center section'>
            {cardDetails.map((card, index) => {
                const backgroundImage = {
                    backgroundImage:`url('${card.cardImage}')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no=repeat",
                    backgroundPosition:"center"
    }
                return (
                    <div className='w-72' key={index}>
                        <div className='h-56 w-72 bg-white mb-3 rounded-2xl' style={backgroundImage}></div>
                        <div className='section'>
                            <p className='mb-3 text-lg font-bold'>{card.cardTitle}</p>
                            <small>
                                {card.cardText}
                            </small>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default LeadershipCard