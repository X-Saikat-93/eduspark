import Header from "./_components/Header";
import HeroSection from "./_components/Hero";
import DotPattern from "@/components/ui/dot-pattern";
import { ny } from "@/lib/utils";
import { AICourseText } from "./_components/AICourseText";
import { HowItWorks } from "./_components/HowItWorks";
export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <AICourseText />
        <HowItWorks/>
      </div>
      <DotPattern
        className={ny(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
        )}
      />
    </>
  );
}
