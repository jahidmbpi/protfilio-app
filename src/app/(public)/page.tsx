import About from "@/component/About/About";
import Banner from "@/component/Home/Banner";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="flex items-center justify-center">
        <h2 className="text-3xl font-bold capitalize">about me</h2>
      </div>
      <About></About>
    </div>
  );
}
