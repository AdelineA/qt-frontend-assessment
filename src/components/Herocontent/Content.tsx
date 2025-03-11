type ContentProps = {
  title: string;
  description: string;
};
const Content = ({ title, description }: ContentProps) => {
  return (
    <div className="text-center flex flex-col items-center justify-center gap-5 text-white py-20">
      <h1 className="font-extrabold text-5xl">{title}</h1>
      <p className="text-2xl">{description}</p>
    </div>
  );
};

export default Content;
