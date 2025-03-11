import HeroContent from "@/components/Herocontent";
import LogoCardGrid from "@/components/LogoCardGrid";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="bg-[#0B1830]">
      <HeroContent />
      <div className="flex gap-10 justify-center items-center py-10">
        <Button variant="secondary" className="px-3 py-6">
          <span className=" bg-[#ee6123]- text-3xl">🔗</span>
          Short link
        </Button>
        <Button variant="outline" className="px-3 py-6">
          <span className=" bg-[#ee6123]- text-3xl">🔗</span>QR Code
        </Button>
      </div>
      <LogoCardGrid />
    </div>
  );
}
