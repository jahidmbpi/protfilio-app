import About from "@/component/About/About";

export default function about() {
  return (
    <div className="max-w-7xl mx-auto min-h-dvh w-full flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold capitalize text-center mb-6 mt-[120px] md:mt-0">
        about me
      </h2>
      <About />
    </div>
  );
}
