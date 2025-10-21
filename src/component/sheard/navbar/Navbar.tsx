"use client";
import Link from "next/link";
import { navitem } from "./navItem";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../../../public/Untitledfile10.json";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full mt-4">
        {/* logo */}
        <div className="w-[90px] rounded-full">
          <Lottie animationData={animationData} loop={true} />
        </div>
        {/* dekstob menu */}
        <div className="hidden md:block">
          <ul className="flex gap-4 font-medium text-[17px] font-mono">
            {navitem.map((item, index) => (
              <Link href={item.path} key={index}>
                {item.route}
              </Link>
            ))}
          </ul>
        </div>
        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>
      <div className="relative">
        <div
          className={`${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-800 ease-in-out  w-full `}
        >
          <div className="block md:hidden w-[70%] h-screen bg-[#111111]">
            <ul className="flex flex-col gap-4 font-medium text-[17px] font-mono items-center">
              {navitem.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.route}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
