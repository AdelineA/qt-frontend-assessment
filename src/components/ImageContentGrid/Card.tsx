import Image from "next/image";

interface CardProps {
  category: string;
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ category, title, description, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md w-[500px] flex-shrink-0 overflow-hidden border hover:shadow-lg transition">
      <div className="p-5 h-1/2">
        <p className="text-base font-bold text-gray-500">{category}</p>
        <h3 className="text-[32px] font-bold">{title}</h3>
        <p className="text-gray-600 text-lg mt-2">{description}</p>
      </div>
      <div className="flex justify-center items-center p-5">
        <a href="#" className="text-gray-700 font-semibold">
          Read More →
        </a>
      </div>
      <div className=" h-full bg-orange-50">
        <Image
          src={image}
          alt={title}
          width={300}
          height={150}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Card;
