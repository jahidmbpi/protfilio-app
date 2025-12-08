import About from "@/component/About/About";
import Banner from "@/component/Home/Banner";
import Projects from "@/component/Projects/Projects";

import Skills from "@/component/Skils/Skils";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto w-full mb-7">
        <h2 className="text-3xl font-bold capitalize text-center">about me</h2>
      </div>
      <About></About>
      <div className="max-w-7xl mx-auto w-full my-7">
        <h2 className="text-3xl font-bold capitalize text-center">my skils</h2>
      </div>
      <Skills></Skills>
      <div className="max-w-7xl mx-auto w-full my-7">
        <h2 className="text-3xl font-bold capitalize  text-center">projects</h2>
      </div>
      <Projects></Projects>
    </div>
  );
}
