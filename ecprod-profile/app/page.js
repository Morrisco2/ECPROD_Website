"use client";

import React from "react";
import Button from "./components/Morrisco/Button";
import CTASection from "./components/Morrisco/CTASection";
import ServiceCard from "./components/Morrisco/ServiceCard";
import TestimonialCard from "./components/Mazi/TestimonialCard";
import useScrollAnimation from "./hooks/useScrollAnimation";
import { useState, useEffect } from "react";

export default function Home() {
  useScrollAnimation();

  const [testimonialPadding, setTestimonialPadding] = useState("px-20");
  const [largeContainer, setLargeContainer] = useState("block");
  const [smallContainer, setSmallContainer] = useState("hidden");
  const [valueProposition, setValueProposition] = useState("md:px-40");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 375) {
        setTestimonialPadding("px-10");
      } else if (screenWidth >= 376 && screenWidth <= 700) {
        setTestimonialPadding("px-20");
      }

      if (screenWidth <= 1140) {
        setSmallContainer("block");
        setLargeContainer("hidden");
        setValueProposition("md:px-10");
      } else {
        setSmallContainer("hidden");
        setLargeContainer("block");
        setValueProposition("md:px-40");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section
        className={`px-5 drop-shadow-sm mb-24 ${largeContainer} section`}
      >
        <div
          className="hero-clip md:bg-white h-fit bg-img items-center px-5 pt-20 flex flex-col md:flex-row justify-between bg-no-repeat bg-right-bottom bg-contain"
          style={{ backgroundImage: "url('/images/hero-bg-img.svg')" }}
        >
          <div className="w-1/2">
            <h1 className="text-3xl md:text-3xl lg:text-5xl text-[#29166F] font-bold mb-2">
              Building a Better Future, Together
            </h1>
            <p className="text-[#808080] mb-10">
              Trusted partner in civil engineering, construction, environmental solutions, and sustainable development for growth.
            </p>
            <div className="flex gap-5">
              <Button text="Contact us" arrow={true} link="/contact" />
              <Button text="Learn more" link="/about" />
            </div>
          </div>

          <div className="h-full flex items-end">
            <img
              src="/images/hero-img.svg"
              alt="Image of engineers in coverall"
              className="md:2/5"
            />
          </div>
        </div>
      </section>

      <section
        className={`px-5 drop-shadow-sm mb-24 ${smallContainer} section`}
      >
        <div
          className="bg-white h-fit rounded-[20px] bg-img items-center px-5 pt-20 flex flex-col md:flex-row justify-between bg-no-repeat bg-right-bottom bg-contain"
          style={{ backgroundImage: "url('/images/hero-bg-img.svg')" }}
        >
          <div className="md:w-1/2">
            <h1 className="text-xl md:text-2xl lg:text-4xl text-[#29166F] font-bold mb-2">
              Your Trusted Partner in Sustainable Development and Growth
            </h1>
            <p className="text-[#808080] mb-10">
              ECPROD Nig Ltd is a multidisciplinary company delivering
              innovative solutions across civil engineering, construction,
              environmental management, and more.
            </p>
            <div className="flex flex-col md:flex-row gap-5 mb-5 md:mb-0">
              <Button text="Contact us" arrow={true} link="/contact" />
              <Button text="Learn more" link="/contact" />
            </div>
          </div>

          <div className="md:w-1/2 lg:h-full flex items-end">
            <img
              src="/images/hero-img.svg"
              alt="Image of engineers in coverall"
              className="md:h-full lg:h-5/6"
            />
          </div>
        </div>
      </section>

      <section className="px-5 flex flex-col items-center text-center mb-24 section">
        <h3 className="text-[#29166F] text-xl md:text-2xl font-bold">
          Our Mission
        </h3>
        <p className="text-[#808080] md:w-4/5 lg:w-3/5">
          Our mission is to provide clients with innovative, sustainable, and tailor-made solutions that propel them towards success.
        </p>
      </section>

      <section className="px-5 items-center mb-24 section">
        <div className="bg-white shadow-sm w-full rounded-3xl p-5 flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-[35%] mb-5 md:mb-0">
            <h3 className="text-[#29166F] text-xl md:text-2xl font-bold">
              What We Do
            </h3>
            <p className="text-[#808080] text-sm md:w-3/5 mb-10">
              Explore our comprehensive range of services designed to drive
              infrastructural growth and empower industries:
            </p>
            <Button text="View all services" arrow={true} link="/services" />
          </div>

          <div className="w-full md:w-[65%] lg:w-2/5">
            <ServiceCard />
          </div>
        </div>
      </section>

      <section
        className={`flex flex-col items-center ${valueProposition} mb-24 section`}
      >
        <h3 className="text-[#29166F] text-xl md:text-2xl font-bold mb-5">
          Why Choose ECPROD Nig Ltd?
        </h3>

        <div className="w-full px-5">
          <div className="flex flex-col md:flex-row gap-5 mb-5">
            <div
              className="relative border rounded-[20px] overflow-hidden flex flex-col md:w-3/5 bg-center bg-cover min-h-[200px]"
              style={{ backgroundImage: "url('/images/trust.svg')" }}
            >
              <div className="w-[95%] bg-opacity-30 bg-white p-5 rounded-[20px] absolute bottom-5 backdrop-blur-sm self-center text-xs md:text-sm font-bold">
                Trusted by government, private, and international partners
              </div>
            </div>

            <div
              className="relative rounded-[20px] overflow-hidden flex flex-col md:w-2/5 bg-center bg-cover min-h-[200px]"
              style={{ backgroundImage: "url('/images/experience.svg')" }}
            >
              <div className="w-[95%] bg-opacity-30 bg-white p-5 rounded-[20px] absolute bottom-5 backdrop-blur-sm self-center text-xs md:text-sm font-bold">
                Decades of hands-on industry experience
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div
              className="relative rounded-[20px] overflow-hidden flex flex-col md:w-2/5 bg-center bg-cover min-h-[200px]"
              style={{ backgroundImage: "url('/images/innovation.svg')" }}
            >
              <div className="w-[95%] bg-opacity-30 bg-white p-5 rounded-[20px] absolute bottom-5 backdrop-blur-sm self-center text-xs md:text-sm font-bold">
                Fully committed to sustainability and innovation
              </div>
            </div>

            <div
              className="relative rounded-[20px] overflow-hidden flex flex-col md:w-3/5 bg-center bg-cover min-h-[200px]"
              style={{ backgroundImage: "url('/images/delivery.svg')" }}
            >
              <div className="w-[95%] bg-opacity-30 bg-white p-5 rounded-[20px] absolute bottom-5 backdrop-blur-sm self-center text-xs md:text-sm font-bold">
                End-to-end project execution — from design to delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="p-5 md:p-0 mb-24 flex flex-col-reverse md:flex-row items-center gap-10 bg-top md:bg-right-bottom bg-contain bg-no-repeat section"
        style={{ backgroundImage: "url('/images/hero-bg-img.svg')" }}
      >
        <div className="w-full md:w-1/2 lg:w-2/5 pt-5 place-items-center md:pl-32 md:pr-10 md:pt-5 border rounded-[20px] md:rounded-none md:rounded-r-[20px] bg-[linear-gradient(to_top_right,#29166F,#16446F,#166F48,#009A3C)]">
          <img
            src="/images/sustainability-img.svg"
            alt=""
            className="max-h-48 md:h-auto"
          />
        </div>

        <div>
          <h3 className="text-[#29166F] text-xl md:text-2xl font-bold">
            Sustainability First
          </h3>
          <p className="md:w-4/5">
            Environmental responsibility is integral to our approach. We incorporate sustainable  practices into every project, from design to construction and beyond, minimizing our  ecological footprint and maximizing long-term benefits for both clients and the  environment.
          </p>
        </div>
      </section>

      <section className="mb-24 section">
        <h3 className="text-[#29166F] text-xl md:text-2xl text-center font-bold mb-5">
          Hear From Our Other Clients and Partners
        </h3>

        <div
          className={`flex flex-col md:flex-row ${testimonialPadding} md:px-10 lg:px-32 gap-5`}
        >
          <TestimonialCard
            name="Timothy Bowen"
            position="CEO, Greystone Properties Ltd"
            testimony="ECPROD's building and civil engineering division exceeded our expectations. From blueprint to final brick, they showed unmatched technical competence and collaborative spirit."
          />
          <TestimonialCard
            name="Jessica Rhone"
            position="Sustainability Consultant, GreenEarth International"
            testimony="Their team conducted a thorough Environmental Impact Assessment for our development site and provided practical, sustainable solutions. It's rare to find such dedication to eco-responsibility in this industry."
          />
          <TestimonialCard
            name="Ben Donovan"
            position="Vocational Training Alumnus"
            testimony="The skills training I received from ECPROD opened doors for me. The instructors were supportive, and the hands-on sessions gave me real confidence. I now work as a certified technician!"
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
