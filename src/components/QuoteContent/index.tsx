import { testimonials } from "@/data/testimonials";
import Card from "./Card";

const QuoteContent = () => {
  return (
    <div className="bg-[rgb(243,102,0)] flex justify-center flex-col items-center py-16 px-4">
      <h1 className="items-center text-4xl pb-10 font-bold">
        what Our customer are saying
      </h1>
      {testimonials.map((testimonial) => (
        <Card title={""} key={testimonial.id} {...testimonial} />
      ))}
      <div className="flex justify-center mt-6 space-x-4">
        <button className="p-1 border-2 border-gray-700 rounded-full hover:bg-gray-700 text-3xl text-center">
          &#8592;
        </button>
        <button className="p-1 border-2 border-gray-700 rounded-full hover:bg-gray-700 text-3xl text-center">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default QuoteContent;
