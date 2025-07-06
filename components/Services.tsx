// import React from "react";
// import ServicesCard from "./Helper/ServicesCard";

// const Services = () => {
//   return (
//     <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]" id="services">
//      <div className="text-center">
//   <p className="text-[17px] text-white opacity-75">Popular Services</p>
//   <h1 className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-white text-[27px] md:text-[30px] lg:text-[38px] xl:text-[45px]">
//     My Special <span className="text-orange-300">Services</span> For You
//   </h1>
// </div>

//       <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
//         <div data-aos="fade-up" data-aos-anchor-placement="top-center">
//           <ServicesCard
//             title="React Website"
//             num="01"
//             description="Building fast and modern web applications using React.js with optimized performance."
//           />
//         </div>
//         <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
//           <ServicesCard
//             title="Next JS Website"
//             num="02"
//             description="Developing highly scalable and SEO-friendly applications with Next.js."
//           />
//         </div>
//         <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
//           <ServicesCard
//             title="Fullstack Website"
//             num="03"
//             description="Creating robust full-stack applications with both frontend and backend integration."
//           />
//         </div>
//         <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-delay="600">
//           <ServicesCard
//             title="UI/UX Designing"
//             num="04"
//             description="Crafting visually stunning designs that effectively communicate your identity."
//           />
//         </div >
//         <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-delay="800">
//           <ServicesCard
//             title="Logo Designing"
//             num="05"
//             description="Designing unique and professional logos tailored to your brand's vision."
//           />
//         </div>
//         {/* <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-delay="1000">
//           <ServicesCard
//             title="Video Editing"
//             num="06"
//             description="Editing high-quality videos with smooth transitions and engaging effects."
//           />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Services;
"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import {
  Code,
  MonitorSmartphone,
  Brush,
  Figma,
} from "lucide-react"
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri"

const services = [
  {
  icon: <Code size={40} />,
  title: "Web Development",
  description: "I craft responsive and modern websites using the latest technologies like Next.js, React, and Tailwind CSS. From landing pages to complex platforms, I ensure performance, accessibility, and user experience are always top-notch.",
},
{
  icon: <RiReactjsFill size={40} />,
  title: "React Website",
  description: "I build dynamic and interactive web applications using React.js. My React websites are optimized for speed, scalability, and maintainability, making them perfect for startups and businesses looking to grow online.",
},
{
  icon: <RiNextjsFill size={40} />,
  title: "NextJS Websites",
  description: "Using Next.js, I develop high-performance, SEO-friendly websites and web apps. Whether it's server-side rendering, static site generation, or API integration, I bring powerful solutions tailored to your goals.",
},
{
  icon: <MonitorSmartphone size={40} />,
  title: "Fullstack Website",
  description: "From frontend interfaces to backend APIs and databases, I deliver complete fullstack web solutions. My work ensures seamless functionality, mobile responsiveness, and a clean user experience from end to end.",
},
{
  icon: <Brush size={40} />,
  title: "Graphic Designing",
  description: "I create eye-catching designs tailored to your brand. From logos and banners to social media creatives and business cards, I make sure every visual speaks for your business identity and vision.",
},
{
  icon: <Figma size={40} />,
  title: "UI/UX Designing",
  description: "Using tools like Figma, I design intuitive and aesthetically pleasing interfaces. I focus on user-centered design, wireframing, and prototyping to deliver products that not only look great but are easy to use.",
}

]

// Optional: Different animations per card
const aosAnimations = [
  "flip-left",
  "flip-left",
  "flip-left",
  "flip-left",
  "flip-left",
  "flip-left",
]

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  return (
    <section className="py-16 px-6 bg-gray-800 dark:bg-gray-900" id="services">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4 text-white dark:text-white mt-20" data-aos="fade-down">My Services</h2>
        <p className="text-gray-300 dark:text-gray-300 mb-10" data-aos="fade-down">
          I offer professional solutions to help you grow your digital presence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={aosAnimations[index % aosAnimations.length]}
              data-aos-delay={index * 100}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl hover:shadow-purple-500 transition duration-300 text-center"
            >
              <div className="mb-4 text-purple-500 dark:text-purple-400 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

