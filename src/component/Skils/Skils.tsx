import { Separator } from "@/components/ui/separator";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiPopos } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="space-y-4 mb-8 p-2 md:p-0">
        <h2 className="text-2xl font-semibold">Technology</h2>
        <p>
          Technologies and tools I frequently use for building scalable and
          efficient web applications.
        </p>
      </div>
      <div className="space-y-4 p-2">
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <h2 className="capitalize text-gray-600 font-sans">frontant</h2>
            <Separator className="flex-1 min-w-5 pr-2" />
          </div>
          {/* tecnology */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <FaHtml5 size={30} className="text-[#e34f26]" />
              <div>
                <h2 className="text-black uppercase">HTML</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <SiCss3 size={30} className="text-[#1572b6]" />
              <div>
                <h2 className="text-black uppercase">css</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <RiTailwindCssFill size={30} className="text-[#1572b6]" />
              <div>
                <h2 className="text-black ">Tailwind CSS</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <SiJavascript size={30} className="text-amber-300" />
              <div>
                <h2 className="text-black ">javaScript</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <SiTypescript size={30} className="text-[#3178c6]" />
              <div>
                <h2 className="text-black ">TypeScript</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <FaReact size={30} className="text-[#61dafb]" />

              <div>
                <h2 className="text-black ">React.js</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <SiNextdotjs size={30} className="text-black" />

              <div>
                <h2 className="text-black ">Next.js</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <SiRedux size={30} className="text-[#764abc]" />

              <div>
                <h2 className="text-black ">Redux</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex space-x-2 items-center">
            <h2 className="capitalize text-gray-600 font-sans">Backend</h2>
            <Separator className="flex-1 min-w-5 pr-2" />
          </div>
          {/* tecnology */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <FaNodeJs size={30} className="text-[#50a750]" />
              <div>
                <h2 className="text-black ">Node.js</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <SiExpress size={35} className="text-[#1572b6]" />
              <div>
                <h2 className="text-black uppercase">Express.js</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <SiPrisma size={30} className="text-[#1572b6]" />
              <div>
                <h2 className="text-black ">Prisma</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <h2 className="capitalize text-gray-600 font-sans">
              programming language
            </h2>
            <Separator className="flex-1 min-w-5 pr-2" />
          </div>
          {/* tecnology */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <SiJavascript size={30} className="text-amber-300" />
              <div>
                <h2 className="text-black ">javaScript</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <SiTypescript size={30} className="text-[#3178c6]" />
              <div>
                <h2 className="text-black ">TypeScript</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <FaPython size={30} className="text-[#1572b6]" />
              <div>
                <h2 className="text-black ">Python</h2>
                <p className="bg-[#bedbff] inline-block rounded-sm px-2 text-[12px]">
                  Intermediate
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <FaJava size={30} className="text-[#1572b6]" />
              <div>
                <h2 className="text-black ">Java</h2>
                <p className="bg-[#bedbff] inline-block rounded-sm px-2 text-[12px]">
                  Intermediate
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <h2 className="capitalize text-gray-600 font-sans">Databases</h2>
            <Separator className="flex-1 min-w-5 pr-2" />
          </div>
          {/* tecnology */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <SiMongodb size={30} className="text-[#47a248]" />
              <div>
                <h2 className="text-black ">mongoDB</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <SiPostgresql size={30} className="text-[#3178c6]" />
              <div>
                <h2 className="text-black ">PostgreSQL</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <SiMongoose size={30} className="text-[#1572b6]" />
              <div>
                <h2 className="text-black ">mongoose</h2>
                <p className="bg-[#bedbff] inline-block rounded-sm px-2 text-[12px]">
                  Intermediate
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <h2 className="capitalize text-gray-600 font-sans">
              Oparating System
            </h2>
            <Separator className="flex-1 min-w-5 pr-2" />
          </div>
          {/* tecnology */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <SiPopos size={30} className="text-[#6d6d6d]" />
              <div>
                <h2 className="text-black ">Pop!_OS (Currently Using)</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <FaWindows size={30} className="text-[#3178c6]" />
              <div>
                <h2 className="text-black ">Windows (Previously Used)</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <h2 className="capitalize text-gray-600 font-sans">Tools</h2>
            <Separator className="flex-1 min-w-5 pr-2" />
          </div>
          {/* tecnology */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <FaGitAlt size={30} className="text-[#f05032]" />
              <div>
                <h2 className="text-black ">Git</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <SiPostman size={30} className="text-[#f05032]" />
              <div>
                <h2 className="text-black ">Postman</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
            <div className=" border shadow-lg border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
              <VscVscode size={30} className="text-[#3178c6]" />
              <div>
                <h2 className="text-black ">VS Code</h2>
                <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                  Advanced
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
