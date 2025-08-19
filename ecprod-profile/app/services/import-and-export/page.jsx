import React from "react";
import ServiceTemplate from "../../components/Mazi/ServicePageTemplate.jsx";

const ImportAndExport = () => {
  const items = [
    "Sourcing & Procurement",
    "Export Facilitation",
    "Customs Clearance & Documentation",
    "Logistics & Transportation",
    "Trade Finance Support",
  ];

  return (
    <ServiceTemplate
      service="Import & Export"
      description="We facilitate international trade with reliable sourcing, documentation, and logistics services."
      imgSrc="/images/import-export-min.png"
      capabilitiesTitle="Our Import & Export Capabilities"
      capabilities={items}
    />
  );
};

export default ImportAndExport;
