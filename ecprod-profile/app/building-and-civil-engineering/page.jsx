import React from "react";
import ServiceTemplate from "../components/Mazi/ServicePageTemplate.jsx";

const CivilWorks = () => {
  const items = [
    {
      subHeading: "Residential Buildings: ",
      item: "From individual homes to large-scale housing estates, we manage all aspects of residential construction, ensuring quality craftsmanship and comfortable living spaces."
    },
    {
      subHeading: "Commercial Buildings: ",
      item: "We undertake the construction of office complexes, retail spaces, hotels, and other commercial properties, focusing on functionality, efficiency, and architectural appeal."
    },
    {
      subHeading: "Industrial Facilities: ",
      item: "We have the capabilities to construct industrial plants, factories, warehouses, and other specialized industrial structures, adhering to specific industry requirements and safety regulations."
    },
    {
      subHeading: "Institutional Buildings (Schools, Hospitals, Government): ",
      item: "Our portfolio includes the construction of educational institutions, healthcare facilities, government buildings, and recreational centers, designed to meet the unique needs of these sectors."
    },
    {
      subHeading: "Renovation & Refurbishment: ",
      item: "We provide comprehensive renovation and refurbishment services to upgrade existing structures, enhance their functionality, and extend their lifespan."
    },
    {
      subHeading: "Structural Engineering Design & Analysis: ",
      item: "Our in-house structural engineers provide expert design and analysis services, ensuring the safety and stability of all our building and civil engineering projects."
    },

  ];

  const detailedCapabilities = [
    "Residential Buildings",
    "Commercial Buildings",
    "Industrial Facilities",
    "Institutional Buildings",
    "Renovation and Refurbishment",
    "Structural Engineering Design and Analysis"
  ]

  return (
    <ServiceTemplate
      service="Building & Civil Engineering"
      description="Our Building and Civil Engineering division integrates architectural vision with engineering precision to  deliver functional, aesthetically pleasing, and sustainable structures. Our expertise encompasses:"
      imgSrc="/images/civil-engineering-min.png"
      capabilities={items}
      subHeading={items}
      detailedCapabilities={detailedCapabilities}
    />
  );
};

export default CivilWorks;
