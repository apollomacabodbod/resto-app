import HomeMenusRectangle from "src/assets/home-menus/home-menus-rectangle.svg";

export default function HomeMenus() {
  return (
    <>
      <div className="flex flex-col mt-[6.25em] max-w-[1200px] lg:mx-auto px-[1.25em]">
        <div className="flex items-center justify-center gap-[0.5em]">
          <img src={HomeMenusRectangle} alt="Home Menus Rectangle" />

          <p className="text-[#E4C620] font-inter text-[0.875rem] font-semibold uppercase tracking-[0.1875em]">
            Menus
          </p>
        </div>

        <p className="text-[#FFF4E2] text-center self-center font-literata font-medium  text-[3.25rem] ">
          Discover Our Menus
        </p>

        <p className="text-[#90A3B1]  text-[1rem] font-normal font-inter md:w-[26.4375em] text-center self-center mt-[1em]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id at
          mauris dis tincidunt ipsum faucibus ipsum.
        </p>
      </div>
    </>
  );
}
