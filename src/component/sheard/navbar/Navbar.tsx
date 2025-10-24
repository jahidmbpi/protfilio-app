"use client";
import Link from "next/link";
import { navitem } from "./navItem";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../../../public/Untitledfile10.json";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolly, setScrolly] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || 0;
      setScrolly(currentScroll);

      setVisible(currentScroll > 5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(visible);
  console.log(scrolly);

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        visible ? "py-0 shadow-lg" : "py-7 "
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full relative inset-x-0  ">
        {/* logo */}
        <div className="w-[90px] rounded-full">
          <Lottie animationData={animationData} loop={true} />
        </div>
        {/* dekstob menu */}
        <div className="hidden md:block">
          <ul className="flex gap-4 overflow-hidden py-2 text-[18px] font-bold">
            {navitem.map((item, index) => (
              <Link href={item.path} key={index}>
                {item.route}
              </Link>
            ))}
          </ul>
        </div>
        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer pr-2.5"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </div>

        <div className="absolute top-0 left-0 w-[70%]">
          <div
            className={`${
              open ? "translate-x-0 " : "-translate-x-full"
            } transition-transform duration-700 ease-in-out w-full `}
          >
            <div className="block md:hidden  h-screen bg-[#111111]">
              <ul className="flex flex-col gap-4 font-medium text-[17px] font-mono items-center pt-10">
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
    </div>
  );
}
