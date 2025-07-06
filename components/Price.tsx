import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PriceCard from "./Helper/PriceCard";

const Price = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const basicFeatures = [
    "Next JS Website",
    "React JS Website",
  ];

  const popularFeatures = [
    "Next JS Website",
    "React JS Website",
    "Authentication Website",
  ];

  const premierFeatures = [
    "Next JS Website",
    "React JS Website",
    "Fullstack JS Website",
    "Authentication Website",
    "MERN Website",
  ];

  return (
    <div className="pt-[5rem] pb-[3rem] bg-black" id="popular services">
      <div className="text-center">
        <p className="text-[17px] text-white opacity-75" data-aos="fade-down-left">
          Popular Services
        </p>
        <h1
          className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-white text-[27px] md:text-[30px] lg:text-[38px] xl:text-[45px]"
          data-aos="fade-down-left"
        >
          Best <span className="text-purple-400">Pricing</span> For Your{" "}
          <span className="text-purple-400">Projects</span>
        </h1>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-[4rem] md:pt-[7rem]">
        <PriceCard
          plane="Basic"
          price="15$"
          save="25%"
          bg="bg-gray-900"
          aos="fade-up"
          delay="0"
          features={basicFeatures}
        />
        <PriceCard
          plane="Popular"
          price="25$"
          save="35%"
          bg="bg-gray-900"
          aos="fade-up"
          delay="400"
          features={popularFeatures}
        />
        <PriceCard
          plane="Premier"
          price="40$"
          save="45%"
          bg="bg-gray-900"
          aos="fade-up"
          delay="600"
          features={premierFeatures}
        />
      </div>
    </div>
  );
};

export default Price;
