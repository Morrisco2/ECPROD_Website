import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import React from "react";

const ApproachCard = () => {
  useScrollAnimation();
  const cardDetails = [
    {
      cardIcon: "Client-Centric Focus.svg",
      cardTitle: "Client-Centric Focus",
      cardText:
        "Our clients' needs and goals are at the forefront of every decision we make. We start by thoroughly understanding their vision and requirements, tailoring our solutions to match their specific expectations.",
    },
    {
      cardIcon: "Collaborative Design.svg",
      cardTitle: "Collaborative Design",
      cardText:
        "We believe that the best outcomes emerge from collaborative efforts. Our design process involves close cooperation with clients, architects, engineers, and stakeholders to ensure that the final design aligns seamlessly with all project objectives.",
    },
    {
      cardIcon: "Innovative Solutions.svg",
      cardTitle: "Innovative Solutions",
      cardText:
        "Innovation drives our work. We continuously explore emerging technologies, materials, and construction methods to deliver solutions that are efficient, sustainable, and on the cutting edge of industry advancements.",
    },
    {
      cardIcon: "Sustainability Integration.svg",
      cardTitle: "Sustainability Integration",
      cardText:
        "Environmental responsibility is integral to our approach. We incorporate sustainable practices into every project, from design to construction and beyond, minimizing our ecological footprint and maximizing long-term benefits for both clients and the environment.",
    },
    {
      cardIcon: "Robust Project Management.svg",
      cardTitle: "Robust Project Management",
      cardText:
        "Effective project management is the backbone of our operations. Our dedicated project teams ensure that timelines are met, resources are optimized, risks are mitigated, and communication is transparent throughout the project lifecycle.",
    },
    {
      cardIcon: "Quality Assurance.svg",
      cardTitle: "Quality Assurance",
      cardText:
        "Quality is a non-negotiable aspect of our work. Rigorous quality control processes are implemented at every stage, ensuring that the final deliverables meet or exceed industry standards and client expectations.",
    },
    {
      cardIcon: "Safety First.png",
      cardTitle: "Safety First",
      cardText:
        "We prioritize the safety of all stakeholders—workers, clients, and the public. Stringent safety protocols are enforced on-site to create a secure work environment and prevent accidents.",
    },
    {
      cardIcon: "Stakeholder Engagement.png",
      cardTitle: "Stakeholder Engagement",
      cardText:
        "Open and effective communication with all project stakeholders is crucial. We keep clients, regulatory authorities, local communities, and partners informed and engaged throughout the project to foster understanding and cooperation.",
    },
    {
      cardIcon: "Adaptability.svg",
      cardTitle: "Adaptability",
      cardText:
        "Every project landscape evolves, and we are prepared to adapt. Our teams are equipped to tackle unforeseen challenges, ensuring that projects stay on track despite changing circumstances.",
    },
    {
      cardIcon: "Ethical Practices.svg",
      cardTitle: "Ethical Practices",
      cardText:
        "Ethical business conduct is the foundation of our relationships. We adhere to the highest standards of integrity, transparency, and accountability in all our interactions and operations.",
    },
    {
      cardIcon: "Continuous Improvement.svg",
      cardTitle: "Continuous Improvement",
      cardText:
        "We believe in continuously learning and growing. After each project, we conduct thorough reviews to identify areas for improvement, enabling us to enhance our processes and deliver even better results in the future.",
    },
    {
      cardIcon: "Lasting Impact.svg",
      cardTitle: "Lasting Impact",
      cardText:
        "Our ultimate goal is to create infrastructures that stand the test of time, leaving a positive legacy for future generations. We take pride in knowing that our work contributes to the well-being of communities and the advancement of society.",
    },
  ];

  return (
    <section className="flex flex-wrap px-5 justify-center gap-4">
      {cardDetails.map((card, index) => {
        const cardStyle = {
          backgroundImage: `url('images/icons/${card.cardIcon}')`,
          backgrounSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        };
        return (
          <div
            className="h-72 w-64 bg-[#E4DFF4] rounded-2xl py-3 px-2 section"
            key={index}
          >
            <div className="flex flex-col items-center mb-3 gap-2">
              <div
                className="h-12 w-12 flex justify-center items-center p-1 bg-transparent text-white text-xl"
                style={cardStyle}
              ></div>
              <div>
                <p className="font-semibold text-[#29166F]">{card.cardTitle}</p>
              </div>
            </div>
            <div className="text-center">
              <small>{card.cardText}</small>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ApproachCard;
