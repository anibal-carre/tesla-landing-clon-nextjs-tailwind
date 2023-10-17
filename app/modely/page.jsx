import CarSection from "@/components/CarSections";
import NavBar from "@/components/NavBar";

const ModelY = () => {
  return (
    <div className="w-[100vw] h-screen bg-zinc-900 overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory relative ">
      <NavBar />
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
  );
};

export default ModelY;
