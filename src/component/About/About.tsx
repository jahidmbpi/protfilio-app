import Image from "next/image";
import photo from "../../../public/photo1.png";
export default function About() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
        <div className="flex-1 ">
          <div className=" ">
            <Image
              className="object-cover rounded-lg bg-green-300"
              src={photo}
              alt="this is image"
              width={280}
              height={240}
            />
          </div>
        </div>
        <div className="flex-1 text-start md:text-left p-8 space-y-4">
          <h3 className="text-2xl font-semibold">Hi, I’m Jahid 👋</h3>
          <p className="text-gray-300 leading-relaxed">
            I’m a passionate web developer specializing in React, Next.js, and
            modern UI design. I love building elegant and responsive web
            experiences that blend creativity and performance.
          </p>
        </div>
      </div>
    </div>
  );
}
