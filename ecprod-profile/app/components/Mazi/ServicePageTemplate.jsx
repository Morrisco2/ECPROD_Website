import CTASection from "../Morrisco/CTASection";

const ServiceTemplate = ({
  service,
  description,
  imgSrc,
  capabilitiesTitle,
  capabilities,
}) => {
  const cap = [
    "Road Construction & Rehabilitation – From greenfield roads to the maintenance of existing networks, we deliver smooth, durable, and safe road infrastructure.",
    "Bridges & Flyovers – Designing and building critical transportation links that enhance connectivity.",
    "Drainage Systems – Comprehensive surface and subsurface drainage to prevent flooding and protect infrastructure.",
    "Water Infrastructure – Dams, reservoirs, treatment plants, pipelines, and distribution systems for reliable water access.",
    "Marine Works – Coastal and marine infrastructure including jetties, quay walls, and shore protection.",
    "Earthworks & Land Development – Large-scale excavation, filling, grading, and land reclamation for diverse development projects.",
  ];

  return (
    <>
      <div className="flex flex-col gap-20 px-10">
        <section className="flex flex-col md:flex-row gap-5 items-center mt-20">
          <div className="w-1/2 flex flex-col">
            <h1 className="text-5xl font-bold text-[#29166F]">Civil Works</h1>
            <p className="text-[#29166F]">
              ECPROD Nig Ltd delivers civil works that stand the test of time.
              Our civil engineering projects are executed with precision,
              safety, and sustainability in mind — ensuring that every structure
              we build serves people for generations.
            </p>
          </div>

          <div className="w-1/2">
            <img src="images/civil-works.svg" alt="" className="w-full" />
          </div>
        </section>

        <section className="flex flex-col items-center">
          <div className="w-fit">
            <h3 className="text-2xl font-bold text-[#29166F] mb-5">
              Our Civil Works Capabilities
            </h3>
            <ul className="flex flex-col gap-5 max-w-[600px] list-disc">
              {cap.map((c, index) => (
                <li key={index}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-start justify-between">
          <h2 className="text-3xl font-bold text-[#29166F] mb-5">
            Why Choose ECPROD?
          </h2>
          <ul className="flex flex-col gap-5 max-w-[600px] list-disc">
            <li>
              Proven Expertise – Decades of hands-on experience delivering
              infrastructure nationwide.
            </li>
            <li>
              Advanced Technology – Modern equipment and techniques for
              efficient execution.
            </li>
            <li>
              Safety First – Compliance with local and international safety
              standards.
            </li>
            <li>
              Sustainable Practices – Designs and processes that minimize
              environmental impact.
            </li>
          </ul>
        </section>

        <CTASection />
      </div>
    </>
  );
};

export default ServiceTemplate;
