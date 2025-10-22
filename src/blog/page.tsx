import workingInRestaurant from "src/assets/blog/working-in-restaurant.jpg";
import BlogHeroSection from "./_components/blog-hero-section";
import BlogLatestNews from "./_components/blog-latest-news";

export default function Blog() {
  return (
    <>
      <div
        className="relative flex flex-col bg-cover bg-top"
        style={{ backgroundImage: `url(${workingInRestaurant})` }}
      >
        <div className="absolute inset-0 bg-[#28252E] opacity-40"></div>

        <div className="z-10">
          <BlogHeroSection />
        </div>
      </div>

      <div className="z-10 bg-[#28252E]">
        <BlogLatestNews />
      </div>
    </>
  );
}
