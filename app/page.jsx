import CarSection from "@/components/CarSections";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="w-[100vw] h-screen bg-zinc-900 overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory relative ">
      <NavBar />
      <div className=" snap-center">
        <HeroSection />
      </div>
      <div className=" snap-center">
        <CarSection />
      </div>
      <div className="snap-center">
        <CarSection />
      </div>
      <div className="snap-center">
        <CarSection />
      </div>
    </div>
  );
}
