import React from "react";
import ServiceTemplate from "../components/Mazi/ServicePageTemplate.jsx";

const ProjectManagement = () => {
  const items = [
    {
      subHeading: "Project Planning & Initiation: ",
      item: "Defining project scope, objectives, deliverables, and developing comprehensive project plans."
    },
    {
      subHeading: "Project Execution & Monitoring: ",
      item: "Overseeing all aspects of project execution, tracking progress, managing resources, and ensuring adherence to timelines and budgets."
    },
    {
      subHeading: "Risk Management: ",
      item: "Identifying, assessing, and mitigating potential risks to minimize their impact on project outcomes."
    },
    {
      subHeading: "Stakeholder Engagement: ",
      item: "Effectively communicating with and managing the expectations of all project stakeholders."
    },
    {
      subHeading: "Quality Assurance & Control: ",
      item: "Implementing rigorous quality control measures to ensure deliverables meet the required standards."
    },
    {
      subHeading: "Project Closure & Evaluation: ",
      item: "Formalizing project completion, documenting lessons learned, and evaluating project performance."
    },

  ];

  const detailedCapabilities = [
    "Project Planning and Initiation",
    "Project Execution and Monitoring",
    "Risk Management",
    "Stakeholder Management",
    "Quality Assurance and Control",
    "Project Closure and Evaluation"
  ]

  return (
    <ServiceTemplate
      service="Project Management"
      description="Our Project Management division provides expert leadership and coordination to ensure projects are  delivered efficiently, effectively, and to the highest standards. Our services encompass:"
      imgSrc="/images/project-management-min.png"
      capabilities={items}
      detailedCapabilities={detailedCapabilities}
    />
  );
};

export default ProjectManagement;
