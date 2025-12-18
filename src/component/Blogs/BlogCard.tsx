"use client";

import { IFeaturePost } from "@/type";
import { ArrowRight, CircleUserRound } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface FeturePostCardProps {
  post: IFeaturePost;
}
export default function BlogCard({ post }: FeturePostCardProps) {
  const navigate = useRouter();

  return (
    <div className=" group border p-2 rounded-lg hover:scale-105 transition-transform duration-300">
      <div className="h-[180px] w-full relative overflow-hidden rounded-t-lg">
        <Image
          src="https://i.ibb.co.com/fVDxS4Cr/6.jpg"
          alt="this is post"
          fill
          className="object-cover"
        ></Image>
      </div>
      <div className=" space-y-2">
        <h2 className="font-sans font-semibold text-black/80">{post.title}</h2>
        <p className="font-sans font-normal text-slate-700 text-[15px]">
          {post.contant.split(" ").slice(0, 20).join(" ") +
            (post.contant.split(" ").length > 20 ? "..." : "")}{" "}
        </p>
        <div className="flex items-center justify-between">
          <h2 className="flex gap-2 items-center font-sans text-[14px]">
            {" "}
            <CircleUserRound />
            <span> {post.author.name}</span>
          </h2>
          <p className="text-[14px] font-sans">{post.viewCount} views</p>
        </div>
        <div
          onClick={() => navigate.push(`/blogs/${post.id}`)}
          className="flex items-center justify-end text-blue-600 mt-3 cursor-pointer"
        >
          <p className="mr-1 text-[12px]">Read more</p>
          <ArrowRight size={14} />
        </div>
      </div>
    </div>
  );
}
