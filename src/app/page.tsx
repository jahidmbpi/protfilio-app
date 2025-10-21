import Banner from "@/component/Home/Banner";
import Navbar from "@/component/sheard/navbar/Navbar";
import ParticlesBackground from "@/component/sheard/ParticlesBackground";

export default function Home() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #11071F 0%, #3C0A57 50%, #7A2BBE 100%)",
        minHeight: "100vh",
      }}
    >
      <ParticlesBackground></ParticlesBackground>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}
