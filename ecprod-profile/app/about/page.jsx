"use client";
import React, { useState } from "react";
import PageTitleCard from "../components/Morrisco/PageTitleCard";
import CoreValueCard from "../components/Morrisco/CoreValueCard";
import useScrollAnimation from "../hooks/useScrollAnimation";
import CTASection from "../components/Morrisco/CTASection";
import CoreValueCard2 from "../components/Morrisco/CoreValueCard2";
import ApproachCard from "../components/Morrisco/ApproachCard";
import LeadershipCard from "../components/Morrisco/LeadershipCard";

const About = () => {
  useScrollAnimation();
  const [collaps, setCollaps] = useState(false);

  const handleCollaps = () => {
    setCollaps(!collaps);
  };

  return (
    <section className="min-h-screen my-16 section">
      <PageTitleCard
        imageName="AboutTitleCard.png"
        cardTitle="About ECPROD"
        textColor="text-[#29166F]"
      />
      <div className="flex justify-center section">
        <div className="my-24 text-center px-10 sm:px-10 md:px-16 lg:px-32">
          <p
            className={`align-middle  transition-all duration-500 ease-in-out overflow-hidden mb-3 
        ${collaps ? "max-h-[2000px]" : "max-h-40"}`}
          >
            At ECPROD Nig Ltd, we stand as a testament to innovation and
            excellence in diverse industries. Established in 2023, we have
            swiftly emerged as a pioneering force, shaping the landscape of
            various sectors through our unwavering commitment to quality, client
            satisfaction, and transformative solutions. With a comprehensive
            array of services encompassing Civil Works, Building and Civil
            Engineering, Environmental Management, Skill Training, Project
            Management, Petroleum Products, Property Investment, Import and
            Export, as well as General Contracts, we are committed to delivering
            exceptional solutions that exceed expectations. Our unwavering
            dedication to quality, innovation, and client satisfaction forms the
            cornerstone of our identity. We have garnered the trust of countless
            clients by consistently upholding these principles, making us the
            preferred partner for a diverse range of projects. Our proficiency
            stretches across various domains, enabling us to provide
            transformative solutions that turn your visions into tangible
            realities. Through years of experience, we have cultivated an
            unparalleled expertise that empowers us to tackle even the most
            complex challenges with confidence. When you collaborate with ECPROD
            Nig Ltd, you can be assured of a client-centric approach that places
            your needs and aspirations at the forefront. We meticulously tailor
            our strategies to align with your unique requirements, ensuring that
            every project is executed with precision and finesse. Our success is
            not only measured by the projects we undertake, but by the enduring
            relationships we build. We understand that trust is earned over
            time, and we are committed to nurturing that trust through
            consistent excellence, clear communication, and an unyielding
            commitment to your satisfaction. Whether it's embarking on ambitious
            Civil Works, embracing environmentally conscious solutions through
            our Environmental Management services, fostering skill development
            through comprehensive Training programs, navigating the intricacies
            of Project Management, ensuring a steady supply of high-quality
            Petroleum Products, making astute Property Investments,
            orchestrating seamless Import and Export operations, or engaging in
            versatile General Contracts, ECPROD Nig Ltd stands ready to make
            your aspirations a reality. Discover the power of collaboration, the
            assurance of professionalism, and the fulfillment of your vision –
            all with ECPROD Nig Ltd. 4 In a dynamic world, ECPROD Nig Ltd
            remains your steadfast partner, bringing together experience,
            innovation, and a resolute commitment to deliver results that stand
            the test of time. Join hands with us to embark on a journey that
            transcends the ordinary and ushers in a new era of excellence.
          </p>
          <div>
            <button
              className="bg-transparent text-[#009A3C]"
              onClick={handleCollaps}
            >
              {collaps ? "Collapse" : "Read More"}
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-80 mb-24 px-4 section text-start md:text-start">
        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  pl-4 min-h-80 gap-3 rounded-xl flex justify-center flex-col bg-[#E4DFF4]`}
        >
          <div className="pr-14  flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-[#29166F] mb-5">
              Our Vision
            </h1>
            <p>
              To be a leading and trusted partner in Nigeria, delivering
              innovative and sustainable solutions across diverse sectors,
              contributing to national growth and prosperity
            </p>
          </div>
          <div className="h-60 sm:h-72 md:h-80 lg:h-full">
            <div
              className="m-2 h-56 sm:h-64 md:h-72 lg:max-h-full rounded-xl bg-transparent lg:m-5 "
              style={{
                backgroundImage: "url('images/Rectangle 22.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="min-h-80 mb-24 px-4 section">
        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  pl-4 min-h-80 gap-3 rounded-xl flex justify-center flex-col `}
        >
          <div className="h-60 sm:h-72 md:h-80 lg:h-full">
            <div
              className="m-2 h-56 sm:h-64 md:h-72 lg:max-h-full rounded-xl bg-transparent lg:m-5 "
              style={{
                backgroundImage: "url('images/mission.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <div className=" flex flex-col justify-center text-start md:text-start md:pl-10">
            <h1 className="text-3xl  font-bold text-[#29166F] mb-5">
              Our Mission
            </h1>
            <p>
              To provide high-quality, reliable, and client-focused services in
              civil works, building and civil engineering, environmental
              management, skill training, project management, petroleum
              products, property investment, import and export, and general
              contracts, while upholding ethical standards and contributing to
              sustainable development.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-80 mb-24 px-4 section text-start md:text-start">
        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  pl-4 min-h-80 gap-3 rounded-xl flex justify-center flex-col bg-[#DFF8E9]`}
        >
          <div className="pr-10 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-[#29166F] mb-5">
              Founding Principles
            </h1>
            <p>
              Founded on the principles of quality, integrity, and innovation,
              ECPROD Nig Ltd embodies a commitment to setting new benchmarks.
              With a focus on upholding the highest standards of
              professionalism, ethics, and excellence, we have earned the trust
              of clients across the spectrum.
            </p>
          </div>
          <div className="h-60 sm:h-72 md:h-80 lg:h-full">
            <div
              className="m-2 h-56 sm:h-64 md:h-72 lg:max-h-full rounded-xl bg-transparent lg:m-5 "
              style={{
                backgroundImage: "url('images/founding.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="min-h-80 mb-24 px-4 section">
        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  pl-4 min-h-80 gap-3 rounded-xl flex justify-center flex-col `}
        >
          <div className="h-60 sm:h-72 md:h-80 lg:h-full">
            <div
              className="m-2 h-56 sm:h-64 md:h-72 lg:max-h-full rounded-xl bg-transparent lg:m-5 "
              style={{
                backgroundImage: "url('images/divers.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <div className=" flex flex-col justify-center text-start md:text-start md:pl-10">
            <h1 className="text-3xl  font-bold text-[#29166F] mb-5">
              Diverse Expertise
            </h1>
            <p>
              ECPROD Nig Ltd boasts a diverse range of services that cater to
              the intricate needs of modern industries. From comprehensive Civil
              Works to intricate Building and Civil Engineering projects, from
              environmentally conscious solutions in Environmental Management to
              fostering skill development through Skill Training programs – our
              expertise knows no bounds.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-80 mb-24 px-4 section">
        <div
          className={`flex flex-col justify-center items-center bg-center py-8   pl-4 min-h-80 gap-3 rounded-xl  bg-[#251362]`}
          style={{
            backgroundImage: "url('images/bob.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <div className=" flex justify-center items-center my-6">
            <div className="flex items-center justify-center m-2 bg-transparent lg:m-5 ">
              <h1 className="text-3xl font-bold text-white mb-5 text-center">
                Our Core Values
              </h1>
            </div>
          </div>

          <div className="pr-10 flex flex-col justify-center items-center mb-3">
            <CoreValueCard2 />
          </div>
        </div>
      </div>

      <div className="flex justify-center section">
        <div className="mb-24 text-center px-10 sm:px-10 md:px-16 lg:px-32">
          <h1 className="text-3xl font-bold text-[#29166F] mb-5">
            Our Approach
          </h1>

          <p>
            Our approach is rooted in a commitment to excellence, innovation,
            sustainability, and client collaboration. We believe that every
            project presents a unique opportunity to create lasting value, and
            our holistic approach encompasses the following key principles
          </p>
        </div>
      </div>

      <div className="section mb-24">
        <ApproachCard />
      </div>

      <div className="section mb-24">
        <LeadershipCard />
      </div>

      <div className="flex justify-center section">
        <div className="mb-24 text-center px-10 sm:px-10 md:px-16 lg:px-32">
          <h1 className="text-3xl font-bold text-[#29166F] mb-5">
            Future Forward
          </h1>

          <p className="text-[#808080]">
            As we look ahead, ECPROD Nig Ltd remains committed to innovation and
            growth. We are driven by the pursuit of excellence and the belief
            that every challenge presents an opportunity for transformation.
            ECPROD Nig Ltd isn't just a name; it's a promise of professionalism,
            a commitment to quality, and a journey of turning dreams into
            tangible achievements. With us, your aspirations find a partner that
            understands, collaborates, and delivers. Join us in shaping a future
            where possibilities are boundless, and success is certain.
          </p>
        </div>
      </div>
      <div className="section">
        <CTASection />
      </div>
    </section>
  );
};

export default About;
