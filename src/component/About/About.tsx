import Image from "next/image";
import photo from "../../../public/photo1.png";
export default function About() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col p-2 md:flex-row items-center justify-between w-full gap-4 md:gap-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-sm border border-white/20 md:h-[350px] ">
          <div className="">
            <Image
              className="object-cover rounded-lg overflow-hidden p-[6.5px] w-[300px] h-[356px]"
              src={photo}
              alt="this is image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl shadow-sm border border-white/20 text-start md:text-left px-4 py-8 md:p-8 space-y-4 md:h-[350px]">
          <h3 className="text-2xl font-semibold hidden md:block">
            Hi, I’m Jahid 👋
          </h3>
          <h2 className="inline-block text-black md:hidden border-b-2 border-blue-400 rounded-lg px-2">
            about me
          </h2>

          <div className="space-y-3">
            <p className="text-[#5b5454] leading-relaxed font-sans text-sm">
              Hi, I’m <span className="font-semibold">Jahid</span> — a
              passionate and detail-oriented web developer who loves turning
              creative ideas into modern, responsive, and high-performing web
              experiences.
            </p>
            <p className="text-[#5b5454] leading-relaxed font-sans text-sm">
              I specialize in building full-stack web applications using the
              MERN stack —{" "}
              <span className="font-semibold">
                React.js, Next.js, Node.js, Express.js,
              </span>{" "}
              and <span className="font-semibold">MongoDB.</span> My goal is to
              craft clean, efficient, and user-friendly interfaces that provide
              seamless user experiences.
            </p>
            <p className="text-[#5b5454] leading-relaxed font-sans text-sm">
              I also have hands-on experience with{" "}
              <span className="font-semibold">Firebase</span> for authentication
              and hosting, <span className="font-semibold">Tailwind CSS</span>{" "}
              for fast UI design, and{" "}
              <span className="font-semibold">REST API</span> integration for
              connecting front-end and back-end efficiently.
            </p>
            <p className="text-[#5b5454] leading-relaxed font-sans text-sm">
              Beyond coding, I enjoy learning new technologies, improving UI/UX
              design skills, and contributing to projects that make a real
              impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
