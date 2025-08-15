import React from "react";
import Button from "./Button.jsx";

const CTASection = () => {
  return (
    <section className="flex flex-col py-4 min-h-96 w-full">
      <div className="flex flex-col w-full items-center py-3 px-5">
        <img
          loading="lazy"
          src="/images/Contact Us.svg"
          className=" w-full md:w-4/5"
        />
        <h3 className="text-[#29166F] font-bold text-center">
          Need Expert Solutions You Can Trust?
        </h3>
      </div>
      <div className="flex justify-center items-center mt-2 mb-4">
        <small className="w-96 text-center text-sm text-gray-500">
          ECPROD Nig Ltd is ready to bring your vision to life. From concept to
          completion, our team is here to support your goals with experience,
          innovation, and integrity.
        </small>
      </div>
      <div className="relative flex justify-center items-center w-full h-full">
        <div className="w-52 h-52 flex justify-center items-center border border-gray-100 rounded-full">
          <div className="w-44 h-44 flex justify-center items-center border border-gray-200 rounded-full">
            <div className="w-36 h-36 flex justify-center items-center border border-gray-300 rounded-full">
              <div className="w-28 h-28 flex justify-center items-center border border-gray-400 rounded-full">
                <div className="w-20 h-20 border border-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-center items-center z-50">
          <Button text="Contact Us" arrow={true} />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
