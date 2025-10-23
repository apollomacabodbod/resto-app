import BlogDetail from "./_components/blog-detail";
import BlogRelatedArticles from "./_components/blog-related-articles";

export default function BlogDetails() {
  return (
    <>
      <div className="flex flex-col ">
        <BlogDetail />
      </div>

      <div className="bg-[#28252E]">
        <BlogRelatedArticles />
      </div>
    </>
  );
}
