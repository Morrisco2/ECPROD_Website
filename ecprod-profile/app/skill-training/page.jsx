import React from "react";
import ServiceTemplate from "../components/Mazi/ServicePageTemplate.jsx";

const SkillTraining = () => {
  const items = [
    {
      subHeading: "Needs Assessment: ",
      item: "We work closely with individuals, organizations, and industries to identify specific skill gaps and training requirements. This ensures our programs are relevant and impactful.",
    },
    {
      subHeading: "Customized Curriculum Development: ",
      item: "Our experienced trainers and subject matter experts develop tailored curricula that align with industry standards and best practices. We emphasize practical application and hands-on experience.",
    },
    {
      subHeading: "Experienced and Certified Trainers: ",
      item: "Our training programs are delivered by highly qualified and experienced professionals with proven expertise in their respective fields. They utilize engaging methodologies and create a conducive learning environment.",
    },
    {
      subHeading: "State-of-the-Art Facilities: ",
      item: "For technical and vocational training, we leverage well-equipped training facilities to provide participants with practical, hands-on experience using relevant tools and equipment.",
    },
    {
      subHeading: "Flexible Delivery Options: ",
      item: "We offer a variety of training delivery methods to suit different learning styles and organizational needs, including:",
    },
    {
      subHeading: "Assessment and Certification: ",
      item: "We implement robust assessment methods to evaluate learning outcomes and provide participants with recognized certifications upon successful completion of training programs.",
    },
    {
      subHeading: "Post-Training Support: ",
      item: "We offer follow-up support and resources to help graduates apply their newly acquired skills and facilitate their transition into relevant employment opportunities or enhanced job roles.",
    },
    {
      subHeading: "Customized Training Solutions: ",
      item: "We understand that organizations often have unique training requirements. ECPROD Nig Ltd specializes in developing and delivering customized training programs tailored to the specific needs of businesses and industries. We work collaboratively with our clients to design training solutions that address their specific challenges and contribute to their organizational goals.",
    },
    {
      subHeading: "Our Commitment to Impact: ",
      item: "ECPROD Nig Ltd is committed to delivering skills training programs that have a tangible and lasting impact on individuals, organizations, and the wider community. We strive to equip participants with the skills and knowledge necessary to succeed in their chosen fields, contribute to economic growth, and build a brighter future for Nigeria.",
    },
  ];

  const detailedCapabilities = [
    "Technical and Vocational Training",
    "Digital training",
    "Professional Development",
    "Customized Training Solutions",
    "Certification and Accreditation",
  ];

  return (
    <>
      <ServiceTemplate
        service="Skill Training"
        description="Our Skills Training services are designed to bridge the skills gap, enhance productivity, and foster a  culture of continuous learning across various sectors. We offer a comprehensive range of training  programs tailored to meet the evolving demands of industries and empower individuals with in-demand  skills. Key aspects include but not limited to:"
        imgSrc="/images/Skill Training.png"
        capabilities={items}
        detailedCapabilities={detailedCapabilities}
      />
    </>
  );
};

export default SkillTraining;
