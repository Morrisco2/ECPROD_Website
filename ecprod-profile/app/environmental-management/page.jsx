import React from "react";
import ServiceTemplate from "../components/Mazi/ServicePageTemplate.jsx";

const EnvironmentalManagement = () => {
  const items = [
    {
      subHeading: "Environmental Impact Assessments (EIA): ",
      item: "We conduct thorough EIAs to identify potential environmental risks associated with projects and develop mitigation measures to minimize negative impacts."
    },
    {
      subHeading: "Waste Management Solutions: ",
      item: "We provide comprehensive waste management services, including collection, transportation, treatment, and disposal, adhering to environmental regulations and promoting sustainable waste management practices."
    },
    {
      subHeading: "Pollution Control: ",
      item: "We offer solutions for air, water, and soil pollution control, including the design and implementation of treatment systems and monitoring programs."
    },
    {
      subHeading: "Land Remediation & Reclamation: ",
      item: "We undertake the assessment and remediation of contaminated sites, restoring land to productive use and mitigating environmental risks."
    },
    {
      subHeading: "Environmental Auditing & Compliance: ",
      item: "We assist organizations in conducting environmental audits and ensuring compliance with relevant environmental laws and regulations."
    },
    {
      subHeading: "Sustainability Consulting: ",
      item: "Our experienced environmental consultants provide expert advice on a wide range of environmental issues, helping clients develop and implement sustainable practices."
    }

  ];

  const detailedCapabilities = [
    "Environmental Impact Assessments (EIAs)",
    "Waste Management Solutions",
    "Pollution Control",
    "Land Remediation and Reclamation",
    "Environmental Auditing and Compliance",
    "Environmental Consulting and Advisory Services"
  ]

  return (
    <ServiceTemplate
      service="Environmental Management"
      description="Recognizing the critical importance of environmental sustainability, our Environmental Management  division offers a range of services to minimize environmental impact and promote responsible practices:"
      imgSrc="/images/Environmental Management.png"
      capabilities={items}
      detailedCapabilities={detailedCapabilities}
    />
  );
};

export default EnvironmentalManagement;