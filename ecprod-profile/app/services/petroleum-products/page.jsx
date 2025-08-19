import React from "react";
import ServiceTemplate from "../../components/Mazi/ServicePageTemplate.jsx";

const PetroleumProducts = () => {
  const items = [
    "Sourcing & Procurement",
    "Supply & Distribution",
    "Storage & Handling",
    "Stakeholder Engagement",
  ];

  return (
    <ServiceTemplate
      service="Petroleum Products"
      description="We source, supply, and distribute high-quality petroleum products for industries, businesses, and communities."
      imgSrc="/images/petroleum-product-min.png"
      capabilitiesTitle="Our Petroleum Product Services"
      capabilities={items}
    />
  );
};

export default PetroleumProducts;
