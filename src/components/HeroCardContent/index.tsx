import Image from "next/image";

const HeroCardContent = () => {
  return (
    <div className="bg-[#0C1D31] relative flex flex-col items-center text-center pt-16 px-4">
      <h1 className="text-orange-400 text-3xl md:text-5xl font-bold mb-4">
        More than a link shortener
      </h1>
      <p className="text-gray-300 max-w-2xl mb-6">
        Knowing how your clicks and scans are performing should be as easy as
        making them. Track, analyze, and optimize all your connections in one
        place.
      </p>
      <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-[#0C1D31] transition">
        Get started for free →
      </button>
      <div className="relative mt-10 max-w-4xl w-full">
        <Image
          src="/assets/img.png"
          alt="Dashboard Preview"
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};
export default HeroCardContent;
