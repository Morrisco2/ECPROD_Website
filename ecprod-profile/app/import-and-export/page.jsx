import React from "react";
import ServiceTemplate from "../components/Mazi/ServicePageTemplate.jsx";

const ImportAndExport = () => {
  const items = [ ];

  const detailedCapabilities = [
    "Sourcing and Procurement (International)",
    "Export Facilitation",
    "Customs Clearance and Documentation",
    "Logistics and Transportation",
    "Trade Finance Support",
  ]

  return (
    <ServiceTemplate
      service="Import & Export"
      description="Our Import and Export division facilitates seamless international trade for a variety of goods and  commodities. Our services include but not limited to:"
      imgSrc="/images/Import & Export.png"
      capabilities={items}
      detailedCapabilities={detailedCapabilities}
    />
  );
};

export default ImportAndExport;
