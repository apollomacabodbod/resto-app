import BlogDetail from "./_components/blog-detail";
import BlogDetailComments from "./_components/blog-detail-comments";
import BlogRelatedArticles from "./_components/blog-related-articles";
import BlogRelatedArticlesCards from "./_components/blog-related-articles-cards";

export default function BlogDetails() {
  return (
    <>
      <div className="flex flex-col ">
        <BlogDetail />
      </div>

      <div className="bg-[#28252E]">
        <BlogRelatedArticles />
        <BlogRelatedArticlesCards />
        <BlogDetailComments />
      </div>
    </>
  );
}
