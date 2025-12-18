"use client";
import { Highlight } from "@/components/ui/hero-highlight";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import animationData from "../../../public/banner.json";
import { LucideFileText } from "lucide-react";
export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className=" items-center justify-between flex h-screen flex-col-reverse mt-8S md:flex-row">
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
          <div className="flex  md:justify-start gap-4 md:gap-6 mt-6">
            {/* Resume Button */}
            <button className="border flex items-center justify-center gap-2 w-[130px] rounded-sm bg-[#dce1e5] text-[#112A46]  carsor-pointer capitalize p-2 font-serif ">
              <LucideFileText size={16} />{" "}
              <span className="font-normal">resume</span>
            </button>

            {/* Blog Button */}
            <button className=" font- w-[130px] rounded-sm bg-gray-300/20 carsor-pointer capitalize p-2">
              Blog
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
