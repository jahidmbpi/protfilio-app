import { Separator } from "@/components/ui/separator";
import { FaHtml5 } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className=" space-y-4">
        <h2 className="text-2xl font-semibold">Technology</h2>
        <p>
          Technologies and tools I frequently use for building scalable and
          efficient web applications.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex space-x-2 items-center">
          <h2 className="capitalize text-gray-600 font-sans">frontant</h2>
          <Separator className=" w-full text-[#c9cbcd]" />
        </div>
        {/* tecnology */}
        <div className="grid grid-cols-4 gap-4">
          <div className=" border border-[#c9cbcd] rounded-sm flex items-center justify-start p-3 space-x-2">
            <FaHtml5 size={40} />
            <div>
              <h2 className="text-black uppercase">HTML</h2>
              <p className="bg-[#b8f5cf] inline-block rounded-sm px-2 text-[12px]">
                Advanced
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
