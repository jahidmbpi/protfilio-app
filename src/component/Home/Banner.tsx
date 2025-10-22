"use client";
import { Highlight } from "@/components/ui/hero-highlight";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import animationData from "../../../public/banner.json";
export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto w-full ">
      <div className=" items-center justify-between flex h-[120vh] flex-col md:flex-row">
        <div className="flex-1 space-y-5">
          <h2 className="capitalize text-[16px]  font-sans p-[4px]">hi,I’m</h2>

          <h2 className="text-4xl font-semibold font-sans">
            <Highlight> jahidul islam</Highlight>
          </h2>

          <h2 className="text-6xl font-medium font-popinse text-[#112A46] uppercase">
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
          <div className="flex gap-6">
            <button className="w-[80px] border p-2 text-center items-center rounded-lg">
              helo
            </button>
            <button>helo</button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-6">
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
