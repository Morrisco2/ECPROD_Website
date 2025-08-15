import React from "react";
import ServiceTemplate from "../../components/Mazi/ServicePageTemplate.jsx";

const CivilWorks = () => {
  const items = [
    "Road Construction & Rehabilitation – From greenfield roads to the maintenance of existing networks, we deliver smooth, durable, and safe road infrastructure.",
    "Bridges & Flyovers – Designing and building critical transportation links that enhance connectivity.",
    "Drainage Systems – Comprehensive surface and subsurface drainage to prevent flooding and protect infrastructure.",
    "Water Infrastructure – Dams, reservoirs, treatment plants, pipelines, and distribution systems for reliable water access.",
    "Marine Works – Coastal and marine infrastructure including jetties, quay walls, and shore protection.",
    "Earthworks & Land Development – Large-scale excavation, filling, grading, and land reclamation for diverse development projects.",
  ];

  return (
    <ServiceTemplate
      service="Civil Works"
      description="ECPROD Nig Ltd delivers civil works that stand the test of time. Our civil engineering projects are executed with precision, safety, and sustainability in mind — ensuring that every structure we build serves people for generations."
      imgSrc="/images/civil-works.svg"
      capabilitiesTitle="Our Civil Works Capabilities"
      capabilities={items}
      link="#"
    />
  );
};

export default CivilWorks;
