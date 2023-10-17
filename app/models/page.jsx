import CarSection from "@/components/CarSections";
import NavBar from "@/components/NavBar";

const ModelS = () => {
  return (
    <div className="w-[100vw] h-screen bg-zinc-900 overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory relative ">
      <NavBar />
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
  );
};

export default ModelS;
