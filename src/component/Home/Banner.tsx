"use client";
import { Highlight } from "@/components/ui/hero-highlight";
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto w-full ">
      <div className=" items-center justify-between flex h-screen">
        <div className="flex-1 space-y-4">
          <h2 className="capitalize text-[20px]  font-sans">hi,i am</h2>

          <h2 className="text-4xl  font-semibold font-sans">
            <Highlight> jahidul islam</Highlight>
          </h2>

          <h2 className="text-6xl font-bold text-black uppercase">
            <Typewriter
              words={[
                "Passionate MERN ",
                "Stack Developer",
                "who loves building ",
                "dynamic and user-",
                "friendly web",
                "experiences.",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
            />
          </h2>
        </div>
        <div className="flex-1">
          <h2>hello 2</h2>
        </div>
      </div>
    </div>
  );
}
