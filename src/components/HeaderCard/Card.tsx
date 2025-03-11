import Image from "next/image";

type StatsCardProps = {
  icon: string;
  value: string;
  label: string;
};

const Card: React.FC<StatsCardProps> = ({ icon, value, label }) => {
  return (
    <div className="w-full md:w-[220px] p-6 bg-[#eeeae3] rounded-2xl shadow-md text-center">
      <div className="flex justify-center h-28">
        <Image src={icon} alt={label} width={50} height={50} />
      </div>
      <h2 className="text-4xl font-bold mt-2">{value}</h2>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default Card;
