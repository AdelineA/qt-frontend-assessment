import HeaderCard from "@/components/HeaderCard";
import HeroContent from "@/components/Herocontent";
import ImageCardGrid from "@/components/ImageCardGrid";
import ImageContentGrid from "@/components/ImageContentGrid";
import LinkCard from "@/components/LinkCard";
import LogoCardGrid from "@/components/LogoCardGrid";
import QuoteContent from "@/components/QuoteContent";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0B1830]">
      <HeroContent />
      <div className="flex gap-10 justify-center items-center py-10">
        <Button variant="secondary" className="px-3 py-6 text-black">
          <Image
            src="/assets/lin.svg"
            alt="Short link"
            width={32}
            height={32}
            className="mr-2"
          />
          Short link
        </Button>
        <Button variant="outline" className="px-3 py-6">
          <Image
            src="/assets/rcode.svg"
            alt="Short link"
            width={32}
            height={32}
            className="mr-2"
          />
          QR Code
        </Button>
      </div>
      <LinkCard />
      <LogoCardGrid />
      <div className="bg-[#f7f4ee] py-10">
        <ImageCardGrid />
      </div>
      <HeaderCard />
      <QuoteContent />
      <ImageContentGrid />
    </div>
  );
}
