import React from "react";

const CoreValueCard2 = ({ cardTitle, cardText }) => {
  const cardDetails = [
    {
      cardTitle: "Excellence",
      cardText: "We are committed to delivering exceptional quality and value in all our endeavours.",
    },
    {
      cardTitle: "Integrity",
      cardText: "Ethical conduct, transparency, and trustworthiness are the foundations of our business interactions.",
    },
    {
      cardTitle: "Expertise",
      cardText: "Our team comprises seasoned professionals with diverse expertise, ensuring comprehensive solutions for every project.",
    },
    {
      cardTitle: "Innovation",
      cardText: "We embrace technology and innovation, incorporating the latest advancements to enhance project efficiency and sustainability.",
    },
    {
      cardTitle: "Quality Focus",
      cardText: " Quality is the cornerstone of our services, reflected in our processes, materials, and final deliverables.",
    },

  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 md:justify-start lg:gap-5 lg:justify-start  ">
      {cardDetails.map((card, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-center gap-2 pb-4 items-center text-center  h-36 w-36 py-5 px-1 bg-transparent text-white rounded-xl"
          >
            <div className="flex justify-center items-center px-5">
              <small className=" text-base">{card.cardTitle}</small>
            </div>
            <div>
              <small className="text-xs flex font-extralight justify-center items-center text-center text-gray-300">
                {card.cardText}
              </small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CoreValueCard2;
