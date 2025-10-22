import Navbar from "@/component/sheard/navbar/Navbar";

export default function ComonLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-linear-to-bl from-[#519ff1] via-[#f7f7f7] to-[#b6b3b3]">
      {/* <div className="bg-gradient-to-bl from-[#b4d1ef] via-[#f7f7f7] to-[#f7f7f7]"></div> */}
      <Navbar></Navbar>
      {children}
    </div>
  );
}
