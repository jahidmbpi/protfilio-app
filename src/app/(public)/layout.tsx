import Footer from "@/component/sheard/footter";
import Navbar from "@/component/sheard/navbar/Navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className="grow">{children}</main>
      <Footer></Footer>
    </div>
  );
}
