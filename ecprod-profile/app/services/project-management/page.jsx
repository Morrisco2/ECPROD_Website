import React from "react";
import ServiceTemplate from "../../components/Mazi/ServicePageTemplate.jsx";

const ProjectManagement = () => {
  const items = [
    "Project Planning & Initiation",
    "Execution & Monitoring",
    "Risk Management",
    "Stakeholder Engagement",
    "Quality Assurance & Control",
    "Project Closure & Evaluation",
  ];

  return (
    <ServiceTemplate
      service="Project Management"
      description="We provide leadership and coordination to ensure projects are delivered on time, on budget, and to the highest quality standards."
      imgSrc="/images/project-management-min.png"
      capabilitiesTitle="Our Project Management Capabilities"
      capabilities={items}
    />
  );
};

export default ProjectManagement;
