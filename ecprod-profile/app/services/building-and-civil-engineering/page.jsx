import React from "react";
import ServiceTemplate from "../../components/Mazi/ServicePageTemplate.jsx";

const CivilWorks = () => {
  const items = [
    "Residential & Commercial Buildings.",
    "Industrial Facilities",
    "Institutional Buildings (Schools, Hospitals, Government)",
    "Renovation & Refurbishment",
    "Structural Engineering Design & Analysis",
  ];

  return (
    <ServiceTemplate
      service="Building & Civil Engineering"
      description="We merge architectural vision with engineering precision to deliver residential, commercial, industrial, and institutional buildings that stand as landmarks of quality and functionality."
      imgSrc="/images/civil-engineering-min.png"
      capabilitiesTitle="Our Building & Civil Engineering Capabilities"
      capabilities={items}
    />
  );
};

export default CivilWorks;
