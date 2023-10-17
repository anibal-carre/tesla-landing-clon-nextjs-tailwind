"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CarSection = ({
  model,
  price,
  description,
  bottomText,
  image,
  text1,
  text2,
  link = "#",
}) => {
  const router = useRouter();
  return (
    <section className="w-full h-screen relative flex flex-col justify-end items-center ">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={image}
      />

      <div className="z-10 w-full h-[450px] md:h-[620px] flex flex-col items-center p-5 mb-8 ">
        <h2 className={`text-[${text1}] text-[40px] font-semibold`}>{model}</h2>
        <p className={`text-${text1} text-[20px] font-normal`}>{price}</p>
        <p className="text-[#171a20] text-[12px] font-sm">{description}</p>
      </div>
      <div className="z-10 w-full flex flex-col md:flex-row md:justify-center items-center mb-8 gap-5">
        <button
          onClick={() => router.push(link)}
          className="w-[342px] h-[40px] rounded-[3px] bg-[#ffffffcc] font-semibold"
        >
          Order Now
        </button>
        <button
          onClick={() => router.push(link)}
          className="w-[342px] h-[40px] rounded-[3px] bg-[#222222a6] text-white font-semibold"
        >
          Demo Drive
        </button>
      </div>
      <div className="z-10 w-full flex flex-col items-center p-6">
        <p className={`text-${text2} z-10 text-sm`}>{bottomText}</p>

        <Link href="#" className={`z-10 text-${text2} text-sm underline`}>
          Learn about est. gas savings.
        </Link>
      </div>
    </section>
  );
};

export default CarSection;
