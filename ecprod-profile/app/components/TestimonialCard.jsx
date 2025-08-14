"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const TestimonialCard = ({ name, position, testimony }) => {
  return (
    <>
      <div className="bg-gray-200 mt-5 mb-5 text-black p-2.5 md:p-5 w-full testimonial-clip">
        <div className="mb-10">
          <h4 className="font-bold text-lg text-[#29166F]">Timothy Bowen</h4>
          <p className="text-gray-400 text-[14px]">
            CEO, Greystone Properties Ltd
          </p>
        </div>
        <p className="text-base">
          ECPROD's building and civil engineering division exceeded our
          expectations. From blueprint to final brick, they showed unmatched
          technical competence and collaborative spirit.
        </p>
      </div>
    </>
  );
};

export default TestimonialCard;
