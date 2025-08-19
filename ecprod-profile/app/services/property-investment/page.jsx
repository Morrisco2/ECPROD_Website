import React from "react";
import ServiceTemplate from "../../components/Mazi/ServicePageTemplate.jsx";

const PropertyInvestment = () => {
  const items = [
    "Land Acquisition & Development",
    "Property Development",
    "Property Management",
    "Real Estate Consulting",
  ];

  return (
    <ServiceTemplate
      service="Property Investment"
      description="We identify, acquire, and develop real estate that generates value and contributes to sustainable urban growth."
      imgSrc="/images/property-investment-min.png"
      capabilitiesTitle="Our Property Investment Capabilities"
      capabilities={items}
    />
  );
};

export default PropertyInvestment;
