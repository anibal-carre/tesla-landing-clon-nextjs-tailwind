"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const modelAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const priceAnimation = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const descriptionAnimation = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section className="w-full h-screen relative flex flex-col justify-end items-center ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./public_video (2).webm"
        muted
        autoPlay
        loop
      ></video>

      <div className="z-10 w-full h-[450px] md:h-[620px] flex flex-col items-center p-5 mb-8 ">
        <motion.h2
          variants={modelAnimation}
          initial="hidden"
          animate="show"
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="text-white text-[40px] font-semibold"
        >
          Model 3
        </motion.h2>
        <motion.p
          variants={priceAnimation}
          initial="hidden"
          animate="show"
          transition={{ ease: "easeOut", duration: 2 }}
          className="text-white text-[20px] font-normal"
        >
          From $29,740*
        </motion.p>
        <motion.p
          variants={descriptionAnimation}
          initial="hidden"
          animate="show"
          transition={{ ease: "easeOut", duration: 2 }}
          className="text-white text-[12px] font-sm"
        >
          After Federal Tax Credit & Est. Gas Savings
        </motion.p>
      </div>
      <div className="z-10 w-full flex flex-col md:flex-row md:justify-center items-center mb-8 gap-5">
        <button className="w-[342px] h-[40px] rounded-[3px] bg-[#ffffffcc] font-semibold">
          Order Now
        </button>
        <button className="w-[342px] h-[40px] rounded-[3px] bg-[#222222a6] text-white font-semibold">
          Demo Drive
        </button>
      </div>
      <div className="z-10 w-full flex flex-col items-center p-6">
        <p className="text-white z-10 text-sm">
          *Price before incentives and savings is $40,240, excluding taxes and
          fees. Subject to change.
        </p>

        <Link href="#" className="z-10 text-white text-sm underline">
          Learn about est. gas savings.
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
