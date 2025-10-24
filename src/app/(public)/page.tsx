import About from "@/component/About/About";
import Banner from "@/component/Home/Banner";
import Skils from "@/component/Skils/Skils";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold capitalize md:my-[100px] my-10 text-center">
          about me
        </h2>
      </div>
      <About></About>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold capitalize md:my-[100px] my-10 text-center">
          my skils
        </h2>
      </div>
      <Skils></Skils>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold capitalize md:my-[100px] my-10 text-center">
          projects
        </h2>
      </div>
    </div>
  );
}
