"use client";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "./Card";
import { useRef } from "react";
import { imageData } from "../../data/imageData";

const ImageContentGrid = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      <div className="pl-[132px] py-10 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold leading-[48px]">
            See how other businesses use Bitly
          </h2>
          <div className="flex gap-2">
            <button
              className="bg-white p-2 shadow-md rounded-full border hover:bg-gray-100 transition"
              onClick={scrollLeft}
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              className="bg-white p-2 shadow-md rounded-full border hover:bg-gray-100 transition"
              onClick={scrollRight}
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto">
          {imageData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageContentGrid;
