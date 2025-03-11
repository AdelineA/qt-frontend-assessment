import { footerData } from "@/data/footerData";

const Footer = () => {
  return (
    <footer className="bg-[#0B1830] text-white py-10">
      <div className="content-wrapper max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="text-orange-500 font-semibold mb-2">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
