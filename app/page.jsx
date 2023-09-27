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
        <CarSection
          model={"Model Y"}
          price={"From $39,390*"}
          description={"After Federal Tax Credit & Est. Gas Savings"}
          bottomText={
            "*Price before incentives and savings is $50,490, excluding taxes and fees. Subject to change."
          }
          image={"./model-y.avif"}
          text1={"#171a20"}
          text2={"#171a20"}
        />
      </div>
      <div className="snap-center">
        <CarSection
          model={"Model S"}
          price={"From $71,090*"}
          description={"After Est. Gas Savings"}
          bottomText={
            "*Price before savings is $74,990, excluding taxes and fees. Subject to change."
          }
          image={"./model-s.avif"}
          text1={"#171a20"}
          text2={"#171a20"}
        />
      </div>
      <div className="snap-center">
        <CarSection
          model={"Model X"}
          price={"From $68,590*"}
          description={"After Federal Tax Credit & Est. Gas Savings"}
          bottomText={
            "*Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change."
          }
          text1={"#171a20"}
          text2={"white"}
          image={"./model-x.avif"}
        />
      </div>
    </div>
  );
}
