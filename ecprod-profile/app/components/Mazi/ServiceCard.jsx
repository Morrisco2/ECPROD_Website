"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

const ServiceCard = ({ cardLink, cardTitle, paragraph, icon, index }) => {
  useScrollAnimation();
  return (
    <>
      <Link href={cardLink} key={index} className="section">
        <div className="bg-[#E4DFF4] flex flex-col text-black rounded-2xl p-3 md:p-5 w-full h-full">
          <div className="bg-[#29166F] h-12 w-12 rounded-full flex items-center justify-center text-white text-2xl mb-2.5">
            {icon}
          </div>
          <h3 className="text-base font-bold mb-4 text-[#29166F]">
            {cardTitle}
          </h3>
          <p className="text-sm font-normal">{paragraph}</p>
        </div>
      </Link>
    </>
  );
};

export default ServiceCard;
