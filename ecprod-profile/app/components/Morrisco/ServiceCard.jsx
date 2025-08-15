import React from 'react'
import { FaHardHat, FaBuilding, FaTasks, FaLeaf, FaChalkboardTeacher } from 'react-icons/fa';
import { GiOilDrum } from 'react-icons/gi';


const ServiceCard = () => {
    const cardMaterial = [
        {
            icon: "images/icons/civil.svg",
            cardTitle: "Civil Works"

        },
        {
            icon: "images/icons/building.svg",
            cardTitle: "Building & Civil Engineering"
        },
        {
            icon: "images/icons/project.svg",
            cardTitle: "Project Management"
        },
        {
            icon: "images/icons/envi.svg",
            cardTitle: "Environmental Management"
        },
        {
            icon: "images/icons/skill.svg",
            cardTitle: "Skill Training"
        },
        {
            icon: "images/icons/petrolium.svg",
            cardTitle: "Petroleum Products"
        }
    ]


    return (

        <div className='flex flex-wrap justify-center mt-4'>
            {
                cardMaterial.map((card, index) => {
                    const iconBackgroundImage = {
                        backgroundImage: `url(${card.icon})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center"
                    }
                    return (
                        <div key={index} className='flex flex-col justify-between pb-6 items-center mr-2 mt-2 mb-2 h-36 w-36 py-5 px-5 bg-gray-200 rounded-xl'>
                            <div className='h-12 w-12 flex justify-center items-center p-2 rounded-full bg-[#29166F] text-white text-xl'><span className={`h-12 w-12`} style={iconBackgroundImage}></span></div>
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