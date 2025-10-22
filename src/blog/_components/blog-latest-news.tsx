import Rectangle from "src/assets/blog/Rectangle.svg";

export default function BlogLatestNews() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] pt-[6.25em]">
        <div className="flex items-center gap-[0.5em]">
          <img src={Rectangle} alt="" className="object-cover" />

          <p className="text-[#E4C620] font-inter text-[0.875rem] font-semibold uppercase">
            Blog
          </p>
        </div>

        <div className="lg:flex lg:items-center gap-[2em]">
          <p className="text-[#FFF4E2] font-literata text-[3.25rem] font-medium ">
            Latest News
          </p>

          <p className="text-[#90A3B1] font-inter text-[1rem] font-normal lg:w-[25.1875em] ">
            Sed nulla sed purus vitasse. urna est iverra sed etiam quisque. Nisl
            in pulvinar ultrices tempusut dui{" "}
          </p>
        </div>
      </div>
    </>
  );
}
