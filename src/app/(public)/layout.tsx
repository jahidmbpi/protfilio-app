import Navbar from "@/component/sheard/navbar/Navbar";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
}
