import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  tech1: string;
  image: string;
  description: string;
  projectLink: string; // Add projectLink as a prop
}

const ProjectsCard = ({ title, tech1, image, description, projectLink }: Props) => {
  return (
    <div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
        <Image
          src={`${image}`}
          alt={title}
          width={500}
          height={500}
          className="object-contain rounded-xl mx-auto shadow-md"
        />
      </div>
      <div>
        <h1 className="text-[25px] text-white">{title}</h1>
        <p className="text-white opacity-65 text-[15px] mt-[1rem]">{description}</p>
        <div className="mt-[1.3rem] grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-[2rem]">
          <Link href={projectLink} passHref>
            <button className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-blue-700 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
              <span className="relative z-10">{tech1}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
