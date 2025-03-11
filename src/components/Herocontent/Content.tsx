type ContentProps = {
  title: string;
  semiTitle?: string;
  description?: string;
  variant: "PRIMARY" | "SECONDARY";
};
const Content = ({ title, description, semiTitle, variant }: ContentProps) => {
  return (
    <div
      className={`text-center flex flex-col items-center justify-center gap-5 py-20 ${
        variant === "PRIMARY" ? "text-white" : "text-gray-800"
      }`}
    >
      <h2 className="text-xl font-normal mb-4">{semiTitle}</h2>
      <h1 className="font-extrabold text-5xl">{title}</h1>
      <p className="text-2xl">{description}</p>
    </div>
  );
};

export default Content;
