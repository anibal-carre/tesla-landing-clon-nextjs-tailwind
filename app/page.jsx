import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="w-[100vw] h-auto bg-zinc-900">
      <NavBar />
      <HeroSection />
      <video
        className="flex object-center object-cover h-screen w-full"
        src="./public_video (2).webm"
        muted
        autoPlay
        loop
      ></video>
    </div>
  );
}
