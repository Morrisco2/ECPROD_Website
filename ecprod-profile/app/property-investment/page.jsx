import React from "react";
import ServiceTemplate from "../components/Mazi/ServicePageTemplate.jsx";

const PropertyInvestment = () => {
  const items = [  ];

  
  const detailedCapabilities = [
    "Land Acquisition and Development",
    "Property Development",
    "Property Management",
    "Real Estate Consulting",
  ]

  return (
    <ServiceTemplate
      service="Property Investment"
      description="Our Property Investment division strategically identifies and develops real estate opportunities to  generate value and contribute to urban development. Our activities include:"
      imgSrc="/images/Property Investment.png"
      capabilities={items}
      detailedCapabilities={detailedCapabilities}
    />
  );
};

export default PropertyInvestment;
