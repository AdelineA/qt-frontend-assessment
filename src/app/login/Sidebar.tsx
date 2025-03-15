import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-1/2 bg-[#F0F4FF] flex justify-center items-center">
      <div className="max-w-md text-center">
        <Image
          src="/assets/anay.png"
          alt="Analytics"
          width={450}
          height={300}
          className="mx-auto"
        />
        <h3 className="text-lg font-bold mt-4">
          Analyze your links and QR Codes as easily as creating them
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
