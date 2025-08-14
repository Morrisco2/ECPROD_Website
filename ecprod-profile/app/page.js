import Image from "next/image";
import ServiceCard from "./components/ServiceCard.jsx";
import TestimonialCard from "./components/TestimonialCard.jsx";
import { FaPersonDigging } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="px-10 flex gap-5">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </>
  );
}
