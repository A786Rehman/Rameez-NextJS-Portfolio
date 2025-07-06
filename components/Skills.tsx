// import React from "react";
// import SkillsCard from "./Helper/SkillsCard";

// const Skills = () => {
//   return (
//     <div className="pt-[5rem] pb-[3rem] bg-black" id="skills">
//       <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
//         <div className="col-span-3">
//         <p className="text-[17px] text-white opacity-75">My Skills</p>
//   <h1 className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-white text-[27px] md:text-[30px] lg:text-[38px] xl:text-[45px]">
//     Let&apos;s Explore Popular <span className="text-orange-300">Skills</span> &amp; Experience
//   </h1>
//           <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
//             With expertise in UI/UX, frontend web development I craft visually stunning and highly functional
//             digital experiences. Whether it&apos;s designing eye-catching graphics,
//             developing seamless user interfaces, or editing engaging videos, I
//             bring creativity and technical precision to every project.
//             Additionally, my work in faceless YouTube content and AI-generated
//             visuals allows me to create compelling and innovative media that
//             captivates audiences.
//           </p>
          
//         </div>
//         <div className="col-span-4 mt-20">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
//             <div data-aos="flip-left" data-aos-anchor-placement="top-center">
//               <SkillsCard
//                 title="HTML"
//                 image="/images/html.svg"
//                 percentage="80%"
//               />
//             </div>
//             <div
//               data-aos="flip-left"
//               data-aos-anchor-placement="top-center"
//               data-delay="200"
//             >
//               <SkillsCard
//                 title="CSS"
//                 image="/images/css.svg"
//                 percentage="40%"
//               />
//             </div>
//             <div
//               data-aos="flip-left"
//               data-aos-anchor-placement="top-center"
//               data-delay="400"
//             >
//               <SkillsCard
//                 title="JavaScript"
//                 image="/images/js.svg"
//                 percentage="50%"
//               />
//             </div>
//             <div
//               data-aos="flip-left"
//               data-aos-anchor-placement="top-center"
//               data-delay="600"
//             >
//               <SkillsCard
//                 title="TypeScript"
//                 image="/images/ts.svg"
//                 percentage="50%"
//               />
//             </div>
//             <div
//               data-aos="flip-left"
//               data-aos-anchor-placement="top-center"
//               data-delay="800"
//             >
//               <SkillsCard
//                 title="Node JS"
//                 image="/images/node.svg"
//                 percentage="50%"
//               />
//             </div>
//             <div
//               data-aos="flip-left"
//               data-aos-anchor-placement="top-center"
//               data-delay="1000"
//             >
//               <SkillsCard
//                 title="Next JS"
//                 image="/images/next.svg"
//                 percentage="50%"
//               />
//             </div>
//             <div
//               data-aos="flip-left"
//               data-aos-anchor-placement="top-center"
//               data-delay="1200"
//             >
//               <SkillsCard
//                 title="Python"
//                 image="/images/python.svg"
//                 percentage="40%"
//               />
//             </div>
//             <div
//               data-aos="flip-left"
//               data-aos-anchor-placement="top-center"
//               data-delay="1200"
              
//             >
//               <SkillsCard
//                 title="UI/UX Design"
//                 image="/images/ui.png"
//                 percentage="80%"
                
                
//               />
//             </div>
            
//             {/* <div
//               data-aos="flip-left"
//               data-aos-anchor-placement="top-center"
//               data-delay="1200"
//             >
//               <SkillsCard
//                 title="VE"
//                 image="/images/VE.webp"
//                 percentage="80%"
//               />
//             </div> */}
            
            
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
// components/SkillsSection.tsx

"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import { Code, MonitorSmartphone, Brush } from "lucide-react"
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri"
import { SiFigma } from "react-icons/si"

const skills = [
  {
    icon: <Code size={40} />,
    title: "Web Development",
    description: "Building responsive websites using HTML, CSS, JS, and frameworks like React & Next.js.",
  },
  {
    icon: <RiReactjsFill size={40} />,
    title: "React.js",
    description: "Creating interactive UIs with reusable components using React.",
  },
  {
    icon: <RiNextjsFill size={40} />,
    title: "Next.js",
    description: "Building fast and SEO-friendly apps with server-side rendering and API routes.",
  },
  {
    icon: <MonitorSmartphone size={40} />,
    title: "Fullstack Development",
    description: "Creating both frontend and backend apps using modern JavaScript stacks.",
  },
  {
    icon: <Brush size={40} />,
    title: "Graphic Designing",
    description: "Designing banners, logos, and social media posts using tools like Photoshop & Canva.",
  },
  {
    icon: <SiFigma size={40} />,
    title: "UI/UX Design",
    description: "Designing clean and user-friendly interfaces in Figma for web and mobile.",
  },
]

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <section className="py-12 px-4 bg-gray-900 text-white" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10 mt-20">My Skills</h2>
        <p className="text-gray-300 mb-10 text-center">
          I bring creative and technical skills together to deliver impactful digital experiences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="flip-right"
              data-aos-delay={index * 100}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition duration-300 hover:scale-105"
            >
              <div className="mb-4 text-blue-400">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
