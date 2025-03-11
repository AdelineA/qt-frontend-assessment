import { CheckCircle } from "lucide-react";
import Image from "next/image";

const plans = [
  "5 short links/month",
  "3 custom back-halves/month",
  "Unlimited link clicks",
];

const brands = [
  { src: "/assets/curology.svg", alt: "Curology Logo" },
  { src: "/assets/curology.svg", alt: "Curology Logo" },
  { src: "/assets/curology.svg", alt: "Curology Logo" },
  { src: "/assets/curology.svg", alt: "Curology Logo" },
  { src: "/assets/curology.svg", alt: "Curology Logo" },
  { src: "/assets/curology.svg", alt: "Curology Logo" },
];

const LogoCardGrid = () => {
  return (
    <section className="text-white py-10 text-center">
      <h2 className="text-2xl font-semibold leading-[29px] mb-4">
        Sign up for free. Your free plan includes:
      </h2>

      <div className="flex justify-center space-x-6 mb-6">
        {plans.map((plan, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircle size={20} className="text-orange-500" />
            <span>{plan}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center space-x-6 mt-6">
        {brands.map(({ src, alt }, index) => (
          <Image
            key={index}
            src={src}
            alt={alt}
            width={120}
            height={40}
            className="opacity-70"
          />
        ))}
      </div>
    </section>
  );
};
export default LogoCardGrid;
