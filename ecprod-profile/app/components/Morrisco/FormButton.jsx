import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const FormButton = ({ text, arrow }) => {
    return (
        <button
            className={`px-6 py-3 rounded-3xl font-bold flex items-center justify-center gap-2 ${!arrow
                    ? "bg-white hover:bg-gray-200 text-[#009A3C] transition duration-200 ease-in"
                    : "bg-[#009A3C] hover:bg-[#057227] text-white transition duration-200 ease-in"
                }`}
        >
            {text}
            {arrow && (
                <span className="bg-white text-black rounded-full p-1 flex items-center justify-center">
                    <FaArrowRight size={14} />
                </span>
            )}
        </button>
    );
};

export default FormButton;
