import closedRestaurant from "src/assets/blog/closed-restaurant-.jpg";
import buttonArrow from "src/assets/blog/button-arrow.svg";

export default function BlogReadMore() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[4em] mt-[3.375em]">
        <div className="flex flex-col">
          <img src={closedRestaurant} alt="" className="object-cover" />
        </div>

        <div className="flex flex-col">
          <p className="text-[#FFF4E2] font-inter text-[2rem] font-semibold ">
            Super Easy Baked Feta Pasta
          </p>
          <p className="text-[#90A3B1] font-inter text-[1rem] font-normal mt-[1em]">
            July 18, 2022 No Comments
          </p>
          <p className="text-[#90A3B1] font-inter text-[1rem] font-normal mt-[2em]">
            Blandit integer suspendisse velit iaculis duis neque. Massa quam
            iaculis porttitor pulvinar Condi Sapien ullamcorper mauris ornare eu
            mauris. Blandit integer suspendisse velit iaculis duis neque. Massa
            quam iaculis porttitor pulvinar Condi Sapien ullamcorper mauris
            ornare eu mauris.
          </p>

          <div className="flex items-center gap-[0.5em] mt-[2em] cursor-pointer">
            <p className="text-[#E4C620] font-inter text-[1rem] font-bold ">
              Readmore
            </p>

            <img src={buttonArrow} alt="" className="object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}
