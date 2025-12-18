"use client";
import Card from "./Card";
import projectSvg from "../../../public/project.json";
import Lottie from "lottie-react";
export default function Projects() {
  return (
    <div className="max-w-6xl items-center justify-center flex mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 w-full p-2">
        <div className="flex-1 p-6 w-[85%] rounded-xl text-white flex items-center justify-center overflow-hidden">
          <Card />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <Lottie
            animationData={projectSvg}
            loop={true}
            className=" md:w-[60%] md:h-[60%]"
          />
        </div>
      </div>
    </div>
  );
}
