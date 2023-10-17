import CarSection from "@/components/CarSections";
import NavBar from "@/components/NavBar";

const ModelX = () => {
  return (
    <div className="w-[100vw] h-screen bg-zinc-900 overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory relative ">
      <NavBar />
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
  );
};

export default ModelX;
