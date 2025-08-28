"use client";
import React from "react";
import PageTitleCard from "../components/Morrisco/PageTitleCard";
import ServiceCard from "../components/Mazi/ServiceCard";
import CTASection from "../components/Morrisco/CTASection";
import useScrollAnimation from "../hooks/useScrollAnimation";
import {
  FaHardHat,
  FaBuilding,
  FaTasks,
  FaLeaf,
  FaChalkboardTeacher,
  FaFileContract,
} from "react-icons/fa";
import { GiOilDrum, GiCargoCrate, GiCrane } from "react-icons/gi";

const Services = () => {
  useScrollAnimation();

  const services = [
    {
      icon: <FaHardHat />,
      title: "Civil Works",
      description:
        "We undertake a wide spectrum of civil engineering projects, including road construction and rehabilitation, bridges, drainage systems, water infrastructure, and other essential infrastructure development.",
      link: "/civil-works",
    },
    {
      icon: <GiCrane />,
      title: "Building & Civil Engineering",
      description:
        "Our Building and Civil Engineering division integrates architectural vision with engineering precision to  deliver functional, aesthetically pleasing, and sustainable structures.",
      link: "/building-and-civil-engineering",
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Management",
      description:
        "Recognizing the critical importance of environmental sustainability, our Environmental Management  division offers a range of services to minimize environmental impact and promote responsible practices",
      link: "/environmental-management",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Skill Training",
      description:
        "Our Skills Training services are designed to bridge the skills gap, enhance productivity, and foster a  culture of continuous learning across various sectors.",
      link: "/skill-training",
    },
    {
      icon: <FaTasks />,
      title: "Project Management",
      description:
        "Our Project Management division provides expert leadership and coordination to ensure projects are  delivered efficiently, effectively, and to the highest standards.",
      link: "/project-management",
    },
    {
      icon: <GiOilDrum />,
      title: "Petroleum Products",
      description:
        "Our involvement in the petroleum products sector ensures a reliable supply of essential energy resources.",
      link: "/petroleum-products",
    },
    {
      icon: <FaBuilding />,
      title: "Property Investment",
      description:
        "Our Property Investment division strategically identifies and develops real estate opportunities to  generate value and contribute to urban development.",
      link: "/property-investment",
    },
    {
      icon: <GiCargoCrate />,
      title: "Import & Export",
      description:
        "Our Import and Export division facilitates seamless international trade for a variety of goods and  commodities.",
      link: "/import-and-export",
    },
    {
      icon: <FaFileContract />,
      title: "General Contracts",
      description:
        "Leveraging our diverse capabilities and extensive network, we undertake general contracts  across various sectors. We act as a reliable partner, managing and executing projects with a  focus on quality, efficiency, and client satisfaction.",
      link: "/general-contracts",
    },
  ];
  return (
    <>
      <section className="section">
        <PageTitleCard
          imageName="services-min.png"
          cardTitle="Services"
          cardText="Integrated Solutions for Infrastructure, Innovation & Impact"
          textColor="text-white"
        />
      </section>

      <section className="my-24 text-center px-10 sm:px-10 md:px-16 lg:px-32 section">
        <p className="align-middle">
          At ECPROD Nig Ltd, we offer a full spectrum of services designed to
          meet the needs of a fast-evolving nation. From engineering and
          environmental services to skill training and global trade
          facilitation, we are your all-in-one partner for sustainable
          development. Our multidisciplinary expertise allows us to deliver
          projects that are not only functional, but future-focused — balancing
          performance, safety, and responsibility in every solution.
        </p>
      </section>

      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-2">
          {services.map((service, index) => {
            return (
              <ServiceCard
                index={index}
                cardLink={service.link}
                cardTitle={service.title}
                paragraph={service.description}
                icon={service.icon}
              />
            );
          })}
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default Services;
