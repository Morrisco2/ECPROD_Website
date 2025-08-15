"use client";

import CTASection from "../Morrisco/CTASection";
import Footer from "../staticComponents/Footer";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ServiceTemplate = ({
  service,
  description,
  imgSrc,
  capabilitiesTitle,
  capabilities,
}) => {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);

  const nameMap = {
    services: "Services",
    "civil-works": "Civil Works",
  };

  // Define any segments you want to hide
  const hiddenSegments = "service-description";

  // Filter out unwanted segments
  const visibleParts = pathParts.filter(
    (part) => !hiddenSegments.includes(part)
  );

  return (
    <>
      <div className="flex flex-col gap-10 md:gap-20 p-5 md:px-10">
        <ol className="flex text-[12px] text-gray-400">
          {pathParts.map((part, index) => {
            const href = "/" + pathParts.slice(0, index + 1).join("/");
            const label = nameMap[part] ?? part;
            const isLast = index === pathParts.length - 1;

            return (
              <li key={index} className="flex items-center">
                <Link href={href} className="hover:underline">
                  {label}
                </Link>
                {!isLast ? (
                  <>
                    <span className="mx-1">/</span>
                  </>
                ) : null}
              </li>
            );
          })}
        </ol>

        <section className="flex flex-col md:flex-row gap-5 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h1 className="text-3xl md:text-5xl font-bold text-[#29166F]">
              {service}
            </h1>
            <p className="text-[#29166F]">{description}</p>
          </div>

          <div className="w-full md:w-1/2">
            <img src={imgSrc} alt="" className="w-full" />
          </div>
        </section>

        <section className="flex flex-col items-center px-5">
          <div className="w-fit">
            <h3 className="text-2xl font-bold text-[#29166F] mb-5">
              {capabilitiesTitle}
            </h3>
            <ul className="flex flex-col gap-5 max-w-[600px] list-disc">
              {capabilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-start justify-between px-5">
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
