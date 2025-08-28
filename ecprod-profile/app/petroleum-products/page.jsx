import React from "react";
import ServiceTemplate from "../components/Mazi/ServicePageTemplate.jsx";

const PetroleumProducts = () => {
  const items = [];

  const detailedCapabilities = [
    "Sourcing and Procurement",
    "Supply and Distribution",
    "Storage and Handling",
    "Trading and Logistics",
  ]
  return (
    <ServiceTemplate
      service="Petroleum Products"
      description="Our involvement in the petroleum products sector ensures a reliable supply of essential energy resources. Our Petroleum Product Services"
      imgSrc="/images/petroleum-product-min.png"
      capabilitiesTitle=""
      capabilities={items}
      detailedCapabilities={detailedCapabilities}

    />
  );
};

export default PetroleumProducts;
