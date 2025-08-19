import React from "react";
import ServiceTemplate from "../../components/Mazi/ServicePageTemplate.jsx";

const GeneralContracts = () => {
  const items = [
    "Large-scale construction",
    "Specialized procurement",
    "Multi-sector project execution",
    "Custom-built client solutions",
  ];

  return (
    <ServiceTemplate
      service="General Contracts"
      description="Leveraging our multidisciplinary capabilities, we handle diverse projects across multiple sectors — from procurement to specialized construction."
      imgSrc="/images/general-contracts-min.png"
      capabilitiesTitle="Our General Contracting Capabilities "
      capabilities={items}
    />
  );
};

export default GeneralContracts;
