//@ts-nocheck
import { useEffect, useState } from "react";
import { projects } from "./data";
import {
  FaLinkedinIn,
  FaGithub,
  FaAdjust,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiToggleLeft } from "react-icons/bi";

const App = function () {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  console.log(toggle);
  return (
    <div className="px-10 md:px-0 relative">
      <header className="flex justify-between items-center h-16 sticky top-0 z-10 bg-black bg-opacity-75">
        <div className="text-xl md:text-2xl font-medium">Lee Obby</div>

        <ul className="hidden md:flex h-full font-medium text-lg items-center justify-center gap-8">
          <li className="py-3 border-2 border-black hover:border-b-white hover:border-b-2">
            <a href="#home">Home</a>
          </li>
          <li className="py-3 border-2 border-black hover:border-b-white hover:border-b-2">
            <a href="#about">About</a>
          </li>
          <li className="py-3 border-2 border-black hover:border-b-white hover:border-b-2">
            <a href="#works">Works</a>
          </li>
          <li className="py-3 border-2 border-black hover:border-b-white hover:border-b-2">
            <a href="#contact">Contact</a>
          </li>
          <li className="py-3 border-2 border-black hover:border-b-white hover:border-b-2">
            <FaAdjust />
          </li>
        </ul>

        <div
          className="text-xl md:hidden p-2 hover:bg-gray-300"
          onClick={() => setToggle((prev) => !prev)}
        >
          <FaBars />
        </div>
      </header>

      <div
        className={
          toggle
            ? "transition-all duration-200 bg-gray-200 text-black fixed top-0 left-0 right-0 bottom-0 z-20 opacity-100"
            : "transition-all duration-200 bg-gray-200 text-black fixed top-0 left-0 right-0 bottom-0 -z-10 opacity-0"
        }
      >
        <div
          className="p-3 hover:bg-gray-300 w-14 text-center"
          onClick={() => setToggle((prev) => !prev)}
        >
          <FaTimes className="text-3xl" />
        </div>

        <div className="flex flex-col items-center gap-10 mt-14 px-2">
          <a
            className="p-3 hover:bg-gray-300 text-2xl"
            href="#home"
            onClick={() => setToggle((prev) => !prev)}
          >
            Home
          </a>
          <a
            className="p-3 hover:bg-gray-300 text-2xl"
            href="#about"
            onClick={() => setToggle((prev) => !prev)}
          >
            About
          </a>
          <a
            className="p-3 hover:bg-gray-300 text-2xl"
            href="#works"
            onClick={() => setToggle((prev) => !prev)}
          >
            Works
          </a>
          <a
            className="p-3 hover:bg-gray-300 text-2xl"
            href="#contact"
            onClick={() => setToggle((prev) => !prev)}
          >
            Contact
          </a>
          <div className="p-3 hover:bg-gray-300 text-2xl">
            <FaAdjust />
          </div>
        </div>
      </div>

      <section
        id="home"
        className="h-screen flex flex-col justify-center gap-5"
      >
        <div
          className="text-lg md:text-2xl text-slate-200"
          data-aos="fade-right"
        >
          Hello! I'm Obby 👋, a developer based in Indonesia.
        </div>

        <div
          className="text-3xl md:text-4xl font-medium leading-tight max-w-screen-md"
          data-aos="fade-right"
        >
          Fullstack Developer, Javascript Enthusiast and Live Long Learner.
        </div>

        <div
          className="text-sm md:text-lg text-slate-500 max-w-screen-md"
          data-aos="fade-right"
        >
          A developer mainly focused on Website and Web-apps, specializes in
          creating interactive and user-friendly digital experiences for online
          platforms.
        </div>

        <div
          className="mt-4 text-2xl md:text-3xl flex gap-4 justify-left"
          data-aos="fade-in"
        >
          <a
            target="_black"
            className="hover:bg-slate-100 hover:text-black"
            href="https://github.com/obbylee"
          >
            <FaGithub />
          </a>
          <a
            target="_black"
            className="hover:bg-slate-100 hover:text-black"
            href="https://www.linkedin.com/in/leeobby/"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </section>

      <section
        id="about"
        className="h-screen flex flex-col justify-center gap-5"
      >
        <div
          className="text-2xl md:text-3xl text-slate-200"
          data-aos="fade-right"
        >
          About me.
        </div>
        <p
          className="max-w-screen-md text-md md:text-xl text-slate-400 leading-tight"
          data-aos="fade-right"
        >
          I am a developer from Indonesia, a JavaScript enthusiast specializing
          in full-stack development. Currently, I am learning more about React,
          TypeScript, and NodeJs environment. 👋
        </p>

        <p
          className="max-w-screen-md text-md md:text-xl text-slate-400 leading-tight"
          data-aos="fade-right"
        >
          Happy to be part of the developer team at inadmin.io, a startup based
          in Surabaya, Indonesia, where I helped develop full-stack
          microservices.
        </p>

        <p
          className="max-w-screen-md text-md md:text-xl text-slate-400 leading-tight"
          data-aos="fade-right"
        >
          Before joining inadmin.io, I worked as a programmer at STIESIA , where
          I helped manage the development of the Informatic Academic System.
        </p>

        <p
          className="max-w-screen-md text-md md:text-xl text-slate-400 leading-tight"
          data-aos="fade-right"
        >
          Outside of technology, I love spending time with my family and
          chilling. I am also a gamer exploring the world of “Elden Ring.” ☕️
        </p>
      </section>

      <section
        id="works"
        className="min-h-screen flex flex-col justify-center gap-5"
      >
        <div
          className="text-center text-xl md:text-3xl text-slate-200 mb-5"
          data-aos="fade-right"
        >
          Handpicked projects for showcase
        </div>

        <div
          className="flex items-center justify-around flex-wrap gap-3 md:gap-0"
          data-aos="fade-right"
        >
          {projects.map((project) => (
            <img
              key={project.img.url}
              src={project.img.url}
              alt={project.img.alt}
              className="object-contain w-full md:w-72 h-52"
            />
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="h-screen flex flex-col justify-center gap-5"
      >
        <div
          className="md:text-center text-2xl md:text-3xl text-slate-200 mb-5"
          data-aos="fade-right"
        >
          Contact Me
        </div>

        <form className="flex flex-col gap-5">
          <input
            name="name"
            placeholder="Enter your email ..."
            className="p-3 block w-full rounded-lg bg-transparent border border-gray-500 placeholder:text-gray-500"
            data-aos="fade-right"
          />
          <input
            name="email"
            placeholder="Enter your name ..."
            className="p-3 block w-full rounded-lg bg-transparent border border-gray-500 placeholder:text-gray-500"
            data-aos="fade-right"
          />
          <textarea
            name="description"
            placeholder="pour all of your ideas here!"
            rows={5}
            style={{ resize: "none" }}
            className="p-3 block w-full rounded-lg bg-transparent border border-gray-500 placeholder:text-gray-500"
            data-aos="fade-right"
          />

          <button
            type="button"
            className="w-60 py-3 border border-gray-500 rounded-lg hover:bg-slate-900"
          >
            Send message
          </button>
        </form>
      </section>

      <footer className="h-52 flex justify-center items-center">
        <div className="w-96 text-center text-gray-500">
          Loosely designed in Figma and coded in Visual Studio Code by yours
          truly. Built with Vite and Tailwind CSS, deployed with Vercel. @2024
        </div>
      </footer>
    </div>
  );
};

export default App;
