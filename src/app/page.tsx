import Header from "./_components/Header";
import HeroSection from "./_components/Hero";
import DotPattern from "@/components/ui/dot-pattern";
import { ny } from "@/lib/utils";
export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HeroSection />
      </div>
      <DotPattern
        className={ny(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
        )}
      />
    </>
  );
}
