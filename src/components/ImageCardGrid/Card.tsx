"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  features: string[];
  icon: string;
};

const ImageCard: React.FC<CardProps> = ({
  title,
  description,
  features,
  icon,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full md:w-[400px] p-5 bg-[#eeeae3] rounded-2xl shadow-md transition-all cursor-pointer overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Image src={icon} alt={title} width={32} height={32} />
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <span
          className={`text-xl transition-transform ${
            hovered ? "rotate-180" : ""
          }`}
        >
          ⬇
        </span>
      </div>
      <p className="text-gray-600 px-4 mb-4">{description}</p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? -10 : 50 }}
        transition={{ duration: 0.3 }}
        className={`mt-4 ${hovered ? "block" : "hidden"}`}
      >
        <div className="px-4">
          <h4 className="font-bold text-black">Popular {title} Features</h4>
          <ul className="mt-2 space-y-2 text-gray-700">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                🟠 {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 px-4 flex justify-center items-center gap-2">
          <button className="bg-[#0058dd] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Get started for free
          </button>
          <button className="border-2 border-[#0058dd] py-2 px-4 rounded-lg font-semibold text-gray-700 hover:bg-gray-200 transition">
            Learn more
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageCard;
