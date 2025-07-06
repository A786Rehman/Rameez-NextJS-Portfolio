import React from "react";
import Image from "next/image";
import { SparklesIcon, StarIcon } from "@heroicons/react/16/solid";

interface Props {
  image: string;
  user: string;
  role: string;
  description: string;
  portfolioLink?: string; // 👈 optional
}

const ClientReviewsCard = ({ image, user, role, description, portfolioLink }: Props) => {
  return (
    <div className="m-2 hover:bg-gray-700 transition-all duration-300 rounded-lg">
      <div className="border-2 p-4 border-gray-700 rounded-xl relative">
        <Image
          src={image}
          alt={user}
          width={70}
          height={70}
          className="rounded-full mx-auto mt-[2rem]"
        />
        <div>
          <SparklesIcon className="w-[6rem] h-[6rem] text-white opacity-15 fixed" />
        </div>
        <p className="text-[15px] text-white opacity-65 mt-[3rem] text-center">
          {description}
        </p>
        <div className="flex items-center space-x-1 justify-center mt-[0.4rem]">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} className="w-[1.4rem] h-[1.4rem] text-purple-400" />
          ))}
        </div>
        <div>
          <SparklesIcon className="w-[6rem] right-0 h-[6rem] text-white opacity-15 fixed" />
        </div>
        <h1 className="text-[20px] text-center text-white mt-[2rem] font-medium">
          {user}
        </h1>
        <p className="text-purple-400 text-[18px] text-center mb-[2rem]">{role}</p>

        {/* 🌐 Visit Portfolio Button */}
        {portfolioLink && (
          <div className="flex justify-center mb-[2rem]">
            <button
              data-aos="zoom-out"
              data-aos-delay="1600"
              className="before:ease relative h-12 w-40 overflow-hidden bg-purple-600 text-white font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 rounded-md"
            >
              <a
                href={portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10"
              >
                Visit Portfolio
              </a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientReviewsCard;
