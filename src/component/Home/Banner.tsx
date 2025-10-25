"use client";
import { Highlight } from "@/components/ui/hero-highlight";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import animationData from "../../../public/banner.json";
export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto w-full ">
      <div className=" items-center justify-between flex h-[120vh] flex-col-reverse mt-8S md:flex-row">
        <div className="flex-1 space-y-5 p-2 md:p-0">
          <h2 className="capitalize text-[16px]  font-sans p-1">hi,I’m</h2>

          <h2 className="text-3xl md:text-4xl font-semibold font-sans">
            <Highlight> Jahidul Islam</Highlight>
          </h2>

          <h2 className="text-4xl md:text-6xl font-medium font-popinse text-[#112A46] uppercase">
            <Typewriter
              words={[
                "Passionate MERN ",
                "Stack Developer",
                "who love building ",
                "dynamic and user-",
                "friendly web",
                "experiences.",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
            />
          </h2>
          <p className="font-sans text-[#5b5454]">
            Hi, I’m Jahid — a passionate MERN Stack Developer dedicated to
            building creative, functional, and performance-driven web solutions.
          </p>
          <div className="flex  md:justify-start gap-4 md:gap-6 mt-4">
            {/* Resume Button */}
            <button className="relative px-5 py-2 md:px-8 md:py-2.5 text-sm md:text-lg overflow-hidden font-semibold text-white uppercase rounded-lg md:rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00C6FF] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_#00C6FF]">
              <span className="relative z-10">Resume</span>
              <span className="absolute inset-0 bg-linear-to-r from-[#00C6FF] to-[#007BFF] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 rounded-lg md:rounded-xl"></span>
            </button>

            {/* Blog Button */}
            <button className="relative px-5 py-2 md:px-8 md:py-3 text-sm md:text-lg overflow-hidden font-semibold text-gray-300 uppercase rounded-lg md:rounded-xl border border-[#00C6FF] bg-transparent transition-all duration-300 ease-in-out hover:bg-[#00C6FF]/10 hover:text-[#00C6FF] hover:shadow-[0_0_20px_#00C6FF]">
              <span className="relative z-10">Blog</span>
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-6 mt-10 md:mt-0">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-[80%] h-[80%]"
          />
        </div>
      </div>
    </div>
  );
}
