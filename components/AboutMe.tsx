import { ArrowDownCircleIcon, ArrowDownOnSquareIcon, ArrowDownRightIcon, ArrowLeftIcon, ArrowLongDownIcon, CheckBadgeIcon, CheckIcon, StarIcon } from "@heroicons/react/16/solid";
import React from "react";
import Image from "next/image";
import { CiAirportSign1 } from "react-icons/ci";
//
const AboutMe = () => {
  return (
    <div className="mt-[-4rem] bg-black pb-[3rem]" id="about">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">

        <div className="lg:ml-auto">
          <div className=" grid-cols-1 sm:grid-cols-2">
            <div>
              <Image src="/images/about.jpg" alt="" height={400} width={400} className="mr-40 rounded-md" data-aos="fade-up"/>
            </div>
            {/* <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="p-6 text-center bg-orange-500"
            >
              <p className="text-[50px] text-black font-bold">2</p>
              <p className="text-[20px] text-black font-600">
                Years Experience Web Development
              </p>
            </div> */}
            {/* <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="p-6 text-center bg-orange-500"
            >
              <p className="text-[50px] text-black font-bold">1</p>
              <p className="text-[20px] text-black font-600">
                Years Experience UI/UX Designing 
              </p>
            </div> */}
           
            {/* <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay="600"
              className="p-6 text-center bg-orange-500"
            >
              <p className="text-[50px] text-black font-bold">10+</p>
              <p className="text-[20px] text-black font-600">
                I have created Projects using my skills.
              </p>
            </div> */}
          </div>
        </div>
        <div>
          <p className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-white text-[27px] md:text-[30px] lg:text-[38px] xl:text-[45px] opacity-80" data-aos="fade-left">About Me</p>

          <h1 className="text-[27px] text-white opacity-75 " data-aos="fade-left">
            Professional <span className="text-purple-400">Website</span> for
            Your Business
          </h1>

          <p className="text-[15px] mt-[1.3rem] text-white opacity-75" data-aos="fade-left">
            I am a Full-Stack Web Developer with expertise in Next.js and the
            MERN stack, passionate about building dynamic and user-friendly web
            applications. Alongside development, I am a UI/UX Designer, Website
            & Apps Developer.
          </p>
          <div className="mt-[2rem] space-y-3">
            <div
              data-aos="fade-left"
              // data-aos-anchor-placement="top-center"
              className="flex items-center space-x-4"
            >
              <ArrowLeftIcon className="w-[2rem] h-[2rem] text-purple-400" />
              <p className="text-[18px] text-white">Frontend Web Developer</p>
            </div>
            <div
              data-aos="fade-left"
              // data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="flex items-center space-x-4"
            >
              <ArrowLeftIcon className="w-[2rem] h-[2rem] text-purple-400" />
              <p className="text-[18px] text-white">Backend Web Developer</p>
            </div>
            <div
              data-aos="fade-left"
              // data-aos-anchor-placement="top-center"
              data-aos-delay="400"
              className="flex items-center space-x-4"
            >
              <ArrowLeftIcon className="w-[2rem] h-[2rem] text-purple-400" />
              <p className="text-[18px] text-white">UI/UX Designer Website & Apps Developer</p>
            </div>
           
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default AboutMe;
