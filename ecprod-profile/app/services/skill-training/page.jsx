import React from "react";
import ServiceTemplate from "../../components/Mazi/ServicePageTemplate.jsx";

const SkillTraining = () => {
  const items = [
    "Technical & Vocational Training",
    "Digital Skills Training",
    "Professional Development",
    "Customized Training Solutions",
    "Certification & Accreditation",
  ];

  return (
    <ServiceTemplate
      service="Skill Training"
      description="We bridge skill gaps through practical, industry-relevant training, preparing individuals and organizations for a fast-changing economy."
      imgSrc="/images/skill-training-min.png"
      capabilitiesTitle="Our Skill Training Capabilities"
      capabilities={items}
    />
  );
};

export default SkillTraining;
