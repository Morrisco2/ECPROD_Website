"use client";
import React from "react";
import PageTitleCard from "../components/Morrisco/PageTitleCard";
import Form from "../components/Morrisco/Form";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Contact = () => {
  useScrollAnimation();
  return (
    <section className="section">
      <PageTitleCard imageName="contact.png" cardTitle="Contact Us"  />
      <div className=" grid grid-cols-1 md:grid-cols-2  my-24 section ">
        <div className="pl-5 pr-5 mb-6 justify-center text-center md:text-start lg:pr-56 lg:mb-0 flex flex-col pt-5 ">
          <div className="mb-6">
            <h1 className="text-2xl text-[#29166F] mb-3 font-bold">
              Let’s Start the Conversation
            </h1>
            <div>
              <small>
                Whether you're looking to launch a new project, inquire about a
                service, request a quote, or explore partnership opportunities —
                we’re ready to hear from you.
              </small>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-[#29166F] font-bold">Get in Touch</p>
            <div>
              <small>Email: ecprod-nigltd@proton.me</small>
            </div>
            <div>
              <small>Phone: +234 813 303 9718</small>
            </div>
            <div>
              <small>Business Hours: Monday – Friday, 8:00 AM – 5:00 PM</small>
            </div>
          </div>
          <div>
            <p className="text-[#29166F] font-bold">Our Office</p>
            <div>
              <small>
                ECPROD Nig LtdNo. 152, Rumunduru, Oro-Igwe Road,Port Harcourt,
                Rivers State, Nigeria
              </small>
            </div>
          </div>
        </div>
        <div className="flex justify-start px-5">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
