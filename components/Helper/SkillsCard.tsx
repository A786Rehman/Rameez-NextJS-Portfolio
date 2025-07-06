import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  percentage: string;
}

const SkillsCard = ({ image, title, percentage }: Props) => {
  return (
    <div className="p-2 hover:bg-gray-700 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
      <Image
        src={`${image}`}
        alt={title}
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[18px] mt-[1rem] text-white font-semibold">{title}</h1>
      <div className="bg-black mt-[1rem] rounded-lg p-2 text-white opacity-70">
        {percentage}
      </div>
    </div>
  );
};

export default SkillsCard;
