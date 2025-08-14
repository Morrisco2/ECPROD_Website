"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const TestimonialCard = ({ name, position, testimony }) => {
  return (
    <>
      <div className="drop-shadow relative">
        <img
          src="images/quotation.svg"
          alt="quotation mark"
          className="absolute right-0 top-2 scale-90"
        />
        <div className="bg-white text-black p-2.5 md:p-5 w-full testimonial-clip">
          <div className="mb-10">
            <h4 className="font-bold text-lg text-[#29166F]">Timothy Bowen</h4>
            <p className="text-gray-400 text-[14px] w-1/2">
              CEO, Greystone Properties Ltd
            </p>
          </div>
          <p className="text-base">
            ECPROD's building and civil engineering division exceeded our
            expectations. From blueprint to final brick, they showed unmatched
            technical competence and collaborative spirit.
          </p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
