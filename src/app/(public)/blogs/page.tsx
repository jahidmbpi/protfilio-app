import BlogCard from "@/component/Blogs/BlogCard";
import { IFeaturePost } from "@/type";

export default async function BlogPage() {
  const res = await fetch("http://localhost:5001/api/v1/post", {
    cache: "no-store",
  });
  const postdata = await res.json();

  return (
    <div>
      <div className="md:mt-[100px]">
        <h2 className="text-xl font-sans capitalize font-bold text-center my-6">
          all blogs
        </h2>
      </div>
      <div className="max-w-5xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4">
        {postdata?.data?.map((post: IFeaturePost) => (
          <BlogCard key={post.id} post={post}></BlogCard>
        ))}
      </div>
    </div>
  );
}
