import React, { useRef } from "react";

const CoreValueCard2 = ({ cardTitle, cardText }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    // move roughly one viewport’s width each click
    const step = Math.floor(el.clientWidth * 0.9);
    const left = dir === "left" ? el.scrollLeft - step : el.scrollLeft + step;
    el.scrollTo({ left, behavior: "smooth" });
  };

  const cardDetails = [
    {
      cardTitle: "Excellence",
      cardText:
        "We are committed to delivering exceptional quality and value in all our endeavours.",
    },
    {
      cardTitle: "Integrity",
      cardText:
        "Ethical conduct, transparency, and trustworthiness are the foundations of our business interactions.",
    },
    {
      cardTitle: "Expertise",
      cardText:
        "Our team comprises seasoned professionals with diverse expertise, ensuring comprehensive solutions for every project.",
    },
    {
      cardTitle: "Innovation",
      cardText:
        "We embrace technology and innovation, incorporating the latest advancements to enhance project efficiency and sustainability.",
    },
    {
      cardTitle: "Quality Focus",
      cardText:
        " Quality is the cornerstone of our services, reflected in our processes, materials, and final deliverables.",
    },
    {
      cardTitle: "Global Reach",
      cardText:
        " Our international network enables us to cater to clients worldwide, fostering cross-cultural collaboration and diverse project experiences.",
    },
    {
      cardTitle: "Sustainability",
      cardText:
        " Environmental responsibility is integral to our approach, as we prioritize sustainable practices in every aspect of our operations.",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left button */}
      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/40 text-white px-3 py-2 backdrop-blur"
      >
        ◀
      </button>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex items-start overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar px-10"
      >
        {cardDetails.map((card, i) => (
          <div
            key={i}
            className="shrink-0 border snap-center w-64 h-40 rounded-xl p-4 text-white flex flex-col items-center justify-start text-center"
          >
            <h3 className="text-base md:text-lg font-semibold">
              {card.cardTitle}
            </h3>
            <p className="mt-2 text-xs md:text-sm text-gray-300">
              {card.cardText}
            </p>
          </div>
        ))}
      </div>

      {/* Right button */}
      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/40 text-white px-3 py-2 backdrop-blur"
      >
        ▶
      </button>
    </div>
  );
};

export default CoreValueCard2;
