import { Highlight } from "@/components/ui/hero-highlight";

export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto w-full ">
      <div className=" items-center justify-between flex h-screen">
        <div>
          <h2 className="capitalize text-[20px]  font-sans italic">hi,</h2>

          <h2 className="text-3xl  font-semibold font-sans italic">
            <Highlight> i, am jahidul islam</Highlight>
          </h2>
          <h2></h2>
        </div>
        <div>
          <h2>hello 2</h2>
        </div>
      </div>
    </div>
  );
}
