import React from "react";
import ServiceTemplate from "../../components/Mazi/ServicePageTemplate.jsx";

const EnvironmentalManagement = () => {
  const items = [
    "Environmental Impact Assessments (EIA)",
    "Waste Management Solutions",
    "Pollution Control",
    "Land Remediation & Reclamation",
    "Environmental Auditing & Compliance",
    "Sustainability Consulting",
  ];

  return (
    <ServiceTemplate
      service="Environmental Management"
      description="Sustainability is at the heart of our operations. We help clients meet environmental regulations, reduce impact, and implement eco-friendly practices."
      imgSrc="/images/environmental-management-min.png"
      capabilitiesTitle="Our Environmental Management Capabilities"
      capabilities={items}
    />
  );
};

export default EnvironmentalManagement;
