import { headerCardData } from "@/data/headerCardData";
import Card from "./Card";
import Content from "../Herocontent/Content";

const HeaderCard = () => {
  return (
    <section className="bg-white">
      <div className="content-wrapper ">
        <Content
          title="Adopted and loved by millions of users for over a decade"
          variant={"SECONDARY"}
        />
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pb-10">
          {headerCardData.map((stat, index) => (
            <Card key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeaderCard;
