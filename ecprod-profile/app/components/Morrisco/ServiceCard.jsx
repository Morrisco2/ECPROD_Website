import React from "react";
import {
  FaHardHat,
  FaTasks,
  FaLeaf,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { GiOilDrum, GiCrane } from "react-icons/gi";

const ServiceCard = () => {
  const cardMaterial = [
    {
      iconName: FaHardHat,
      cardTitle: "Civil Works",
    },
    {
      iconName: GiCrane,
      cardTitle: "Building & Civil Engineering",
    },
    {
      iconName: FaTasks,
      cardTitle: "Project Management",
    },
    {
      iconName: FaLeaf,
      cardTitle: "Environmental Management",
    },
    {
      iconName: FaChalkboardTeacher,
      cardTitle: "Skill Training",
    },
    {
      iconName: GiOilDrum,
      cardTitle: "Petroleum Products",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-5">
      {cardMaterial.map((card, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-between pb-6 items-center md:min-w-36 py-5 px-5 bg-[#F3F2F7] rounded-xl"
          >
            <div className="h-12 w-12 flex justify-center items-center p-1 rounded-full bg-[#29166F] text-white text-xl">
              {<card.iconName />}
            </div>
            <div className="flex justify-center items-center">
              <small className="text-center font-bold ">{card.cardTitle}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;
