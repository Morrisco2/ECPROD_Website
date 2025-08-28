import React from "react";
import ServiceTemplate from "../components/Mazi/ServicePageTemplate.jsx";

const GeneralContracts = () => {
  const items = [];
  const detailedCapabilities = [ ]

  return (
    <ServiceTemplate
      service="General Contracts"
      description="Leveraging our diverse capabilities and extensive network, we undertake general contracts  across various sectors. We act as a reliable partner, managing and executing projects with a  focus on quality, efficiency, and client satisfaction."
      imgSrc="/images/general-contracts-min.png"
      capabilities={items}
      detailedCapabilities={detailedCapabilities}
    />
  );
};

export default GeneralContracts;
