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
        "From highways to hydrology, our civil engineering team delivers critical infrastructure with precision and purpose.",
      link: "/services/civil-works",
    },
    {
      icon: <GiCrane />,
      title: "Building & Civil Engineering",
      description:
        "We design and construct residential, commercial, industrial, and institutional buildings — combining architectural vision with engineering accuracy.",
      link: "/services/building-and-civil-engineering",
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Management",
      description:
        "We champion sustainability through impact assessments, pollution control, and land remediation. Our services ensure your projects align with global environmental standards.",
      link: "/services/environmental-management",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Skill Training",
      description:
        "We close skill gaps by offering vocational, digital, and professional training programs — equipping individuals and organizations with tools to succeed.",
      link: "/services/skill-training",
    },
    {
      icon: <FaTasks />,
      title: "Project Management",
      description:
        "Our project managers lead with strategy, structure, and success in mind. From planning to execution, we ensure your vision becomes reality.",
      link: "/services/project-management",
    },
    {
      icon: <GiOilDrum />,
      title: "Petroleum Products",
      description:
        "We ensure efficient sourcing, distribution, and logistics of petroleum products — powering industries with reliability and integrity.",
      link: "/services/petroleum-products",
    },
    {
      icon: <FaBuilding />,
      title: "Property Investment",
      description:
        "We identify, acquire, and develop high-value real estate assets that generate long-term returns and urban growth.",
      link: "/services/property-investment",
    },
    {
      icon: <GiCargoCrate />,
      title: "Import & Export",
      description:
        "We streamline international trade, connecting clients to global markets with reliable sourcing, documentation, and logistics solutions.",
      link: "/services/import-and-export",
    },
    {
      icon: <FaFileContract />,
      title: "General Contracts",
      description:
        "With cross-sector capabilities and deep experience, we manage and execute large-scale projects with quality, speed, and precision.",
      link: "/services/general-contracts",
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
