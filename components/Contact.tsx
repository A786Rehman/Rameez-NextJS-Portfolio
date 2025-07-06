import React from "react";

const Contact = () => {
  return (
    <div className="pt-[10rem] pb-[3rem] bg-gray-900" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10rem] items-center w-[80%] mx-auto">
        <form action="https://formspree.io/f/xjkgoqzq" method="POST">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              required
              aria-label="Your name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              required
              aria-label="Your email address"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="py-[0.7rem] mt-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
            required
            aria-label="Message subject"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="py-[0.7rem] mt-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
            required
            aria-label="Your message"
          ></textarea>
          <button
            type="submit"
            className="py-[0.7rem] mt-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-600 rounded-md px-4"
          >
            Submit
          </button>
        </form>
        <div>
          <p className="text-[17px] text-white opacity-75">Get In Touch</p>
          <h1 className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-white text-[27px] md:text-[30px] lg:text-[38px] xl:text-[45px]">
            Let&apos;s <span className="text-purple-400">Make</span> Your{" "}
            <span className="text-purple-400">Brand</span> Brilliant
          </h1>
          <p className="text-[15px] text-white mt-[1rem] opacity-75">
            I&apos;m a frontend web developer, and UI/UX Designer with a passion
            for creating stunning visuals and seamless web experiences. Explore
            my work to see how I blend creativity and functionality. Let&apos;s
            connect and bring your project to life!
          </p>

          <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-purple-400 underline font-bold">
            +92 319 4697762
          </h1>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
