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
            <h4 className="font-bold text-lg text-[#29166F]">{name}</h4>
            <p className="text-gray-400 text-[14px] w-1/2">{position}</p>
          </div>
          <p className="text-base">{testimony}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
