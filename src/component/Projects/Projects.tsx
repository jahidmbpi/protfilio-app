"use client";
import Card from "./Card";
import projectSvg from "../../../public/project.json";
import Lottie from "lottie-react";
export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-between gap-6 w-full">
        {/* Left section */}
        <div className="flex-1 p-6 rounded-xl text-white flex items-center justify-center">
          <Card />
        </div>

        {/* Right section */}
        <div className="flex-1  flex items-center justify-center">
          <Lottie
            animationData={projectSvg}
            loop={true}
            className=" w-[60%] h-[60%]"
          />
        </div>
      </div>
    </div>
  );
}
