import React from 'react'
import { FaHardHat, FaBuilding, FaTasks, FaLeaf, FaChalkboardTeacher } from 'react-icons/fa';
import { GiOilDrum } from 'react-icons/gi';


const ServiceCard = () => {
    const cardMaterial = [
        {
            iconName: FaHardHat,
            cardTitle: "Civil Works"

        },
        {
            iconName: FaBuilding,
            cardTitle: "Building & Civil Engineering"
        },
        {
            iconName: FaTasks,
            cardTitle: "Project Management"
        },
        {
            iconName: FaLeaf,
            cardTitle: "Environmental Management"
        },
        {
            iconName: FaChalkboardTeacher,
            cardTitle: "Skill Training"
        },
        {
            iconName: GiOilDrum,
            cardTitle: "Petroleum Products"
        }
    ]
    return (
            <div className='flex flex-wrap justify-center mt-4'>
                {
                    cardMaterial.map((card, index) => {
                        return (
                            <div key={index} className='flex flex-col justify-between pb-6 items-center mr-2 mt-2 mb-2 h-36 w-36 py-5 px-5 bg-gray-200 rounded-xl'>
                                <div className='h-12 w-12 flex justify-center items-center p-1 rounded-full bg-[#29166F] text-white text-xl'>{<card.iconName />}</div>
                                <div className='flex justify-center items-center'>
                                    <small className='text-center font-bold '>{card.cardTitle}</small>
                                </div>
                            </div>
                        )
                    })
                }
            </div>



    )
}

export default ServiceCard