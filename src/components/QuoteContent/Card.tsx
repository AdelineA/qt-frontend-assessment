import Image from "next/image";
type CardProps = {
  text: string;
  url: string;
  title: string;
  role: string;
};
const Card = ({ text, url, title, role }: CardProps) => {
  return (
    <div className="relative bg-white rounded-4xl shadow-md p-8 max-w-2xl text-center">
      <blockquote className="text-lg font-semibold text-gray-900">
        <span className="text-orange-500 text-3xl">&ldquo;</span>
        {text}
        <span className="text-orange-500 text-3xl">&rdquo;</span>
      </blockquote>
      <div className="flex mt-6">
        <Image
          src={url}
          width={50}
          height={50}
          alt={title}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="text-left justify-center flex flex-col">
          <p className="text-gray-900 font-bold">{title}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
