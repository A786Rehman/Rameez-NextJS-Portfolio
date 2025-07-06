"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function VideoProjects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const videoProjects = [
    {
      url: "/images/pro1.mp4",
      description: "HeadSet Website",
    },
    {
      url: "/images/pro2.mp4",
      description: "GYM Website",
    },
    {
      url: "/images/pro3.mp4",
      description: "Portfolio Website",
    },
    {
      url: "/images/pro4.mp4",
      description: "Plant Website",
    },
    {
      url: "/images/pro5.mp4",
      description: "Fast Food App",
    },
    {
      url: "/images/pro6.mp4",
      description: "Fast Food App",
    },
    {
      url: "/images/pro7.mp4",
      description: "Step Up Shoes Website",
    },
    {
      url: "/images/pro8.mp4",
      description: "Recipes website",
    },
     {
      url: "/images/pro9.mp4",
      description: "PoP Player App",
    },
  ]

  return (
    <section className="py-12 px-4 bg-gray-500 text-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center mt-16" data-aos="fade-up">Projects</h2>
        <p className="text-center text-gray-200 text-lg mb-10" data-aos="fade-up">
          Explore my collection of professional and creative projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoProjects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-[420px] mx-auto"
            >
              <div className="w-full h-60 bg-black">
                <video
                  src={project.url}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">Project {index + 1}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
