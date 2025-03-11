import React from "react";
import Content from "../Herocontent/Content";
import { Button } from "../ui/Button";
import ImageCard from "./Card";
import { cardData } from "@/data/cardData";
import RightArrow from "@/icons/RightArrow";

const ImageCardGrid = () => {
  return (
    <div className="content-wrapper">
      <Content
        semiTitle="Great Connections Start with a click OR SCAN"
        title="The Bitly Connections Platform"
        description="All the products you need to build brand connections, manage links and QR Codes, and connect with audiences everywhere, in a single unified platform."
        variant={"SECONDARY"}
      />
      <div className="flex gap-5 justify-center items-center pb-10">
        <Button
          variant="default"
          className="px-3 py-6 bg-[#0058dd] font-bold hover:bg-gray-900 text-xl"
        >
          Get Started for Free
          <RightArrow />
        </Button>
        <Button
          variant="primary"
          className="px-3 py-6 font-bold hover:bg-gray-900 text-xl"
        >
          Get a Quote
          <RightArrow />
        </Button>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 py-10">
        {cardData.map((card, index) => (
          <ImageCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ImageCardGrid;
