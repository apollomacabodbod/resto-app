import Rectangle from "src/assets/latest-news/Rectangle.svg";
import ArrowButton from "src/assets/latest-news/arrow-button.svg";

export default function HomeLatestNews() {
  return (
    <>
      <div className="bg-[#28252E] ">
        <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] bg-[#28252E] py-[6.25em]">
          <div className="flex items-center gap-[0.5em] ">
            <img src={Rectangle} alt="" />
            <p className="text-[#E4C620] font-inter text-[0.875rem] font-semibold uppercase">
              Blog
            </p>
          </div>

          <div className="lg:flex lg:items-center  gap-[2em] ">
            <p className="text-[#FFF4E2] font-literata text-[3.25rem] font-medium">
              Latest News
            </p>
            <p className="text-[#90A3B1] font-inter text-[1rem] font-normal lg:w-[25.1875em] ">
              Sed nulla sed purus vitasse. urna est iverra sed etiam quisque.
              Nisl in pulvinar ultrices tempusut dui{" "}
            </p>

            <button className="flex items-center border  border-[#FFF4E2] rounded-[3.125em] py-[0.75em] px-[1.5em] gap-[0.5em] mt-[1.5em] lg:mt-[0em]">
              <p className="text-[#FFF4E2] font-inter text-[1rem] font-bold whitespace-nowrap">
                View All
              </p>
              <img src={ArrowButton} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
