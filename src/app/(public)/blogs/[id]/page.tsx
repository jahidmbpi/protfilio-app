import { getBlogById } from "@/services/blogServices";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const blog = await getBlogById(id);

  return {
    title: blog?.title,
    description: blog?.content,
  };
};

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`http://localhost:5001/api/v1/post/${id}`);
  const data = await res.json();
  console.log(data);

  return (
    <div className="max-w-5xl min-h-screen mx-auto flex ">
      <div className="flex flex-col items-center justify-center w-full md:w-full space-y-3 p-2 md:p-0 mt-[60px] md:mt-0">
        <div className="md:w-[80%] w-full md:px-2 space-y-3">
          <div className="flex items-center space-x-2">
            <CircleUserRound className="bg-blue-400 rounded-full" size={30} />
            <div className="font-serif font-light leading-tight">
              <h2>{data.author.name}</h2>
              <p>{data.author.email}</p>
            </div>
          </div>
          <h2 className="font-sans md:text-2xl font-medium ">{data.title}</h2>
        </div>

        <div className="h-[300px] w-full md:w-[800px] relative overflow-hidden rounded-lg">
          <Image
            src="https://i.ibb.co.com/fVDxS4Cr/6.jpg"
            alt="this is post"
            width={1000}
            height={1000}
          />
        </div>

        <div className="w-full md:w-[80%] text-left md:px-2">
          <p className="text-[16px] font-serif leading-relaxed text-slate-700">
            {data.contant}
          </p>
        </div>
      </div>
    </div>
  );
}
