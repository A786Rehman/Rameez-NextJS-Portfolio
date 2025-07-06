import {
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import {
  FaGithub,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4rem] pb-5 border-gray-600 border-opacity-40">
        {/* Left Column */}
        <div className="lg:mx-auto">
          <div className="flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className="w-[30px] h-[30px] text-purple-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              mrameezedu7@gmail.com
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className="w-[30px] h-[30px] text-purple-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              +92 319 4697762
            </p>
          </div>

          {/* Social Icons below Phone Number */}
          <div className="flex items-center space-x-4 mt-[1.5rem]">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white hover:text-purple-300 w-[24px] h-[24px]" />
            </a>
           
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-white hover:text-purple-300 w-[24px] h-[24px]" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white hover:text-purple-300 w-[24px] h-[24px]" />
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div className="md:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Quick Link
          </h1>
          {["home", "about", "skills", "contact"].map((link) => (
            <p
              key={link}
              className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-purple-300"
            >
              <a href={`#${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
            </p>
          ))}
        </div>

        {/* Right Column - Contact Info + Socials */}
        




        
        <div>
          <div className="font-primary text-white text-[18px]">
            <span className="text-[30px] md:text-[40px] text-purple-400">
              Muhammad.
            </span>
            Rameez
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
            “Thank you for visiting my portfolio! I’m thrilled to showcase my
            work and share the creative projects I’ve had the pleasure of
            bringing to life. If you’d like to collaborate or have any
            questions, don’t hesitate to get in touch. Let’s create something
            amazing together!”
          </h1>
          <p className="mt-[1.3rem] text-purple-300 underline font-semibold">
            mrameezedu7@gmail.com
          </p>
        </div>
      </div>

      <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70 text-center">
        &#169; Copyright Muhammad.Rameez 2025
      </div>
    </div>
  );
};

export default Footer;
