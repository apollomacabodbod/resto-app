import viewMenusArrow from "src/assets/home-view-menus/view-menus-arrow.svg";

export default function ViewAllMenusButton() {
  return (
    <>
      <div className="flex flex-col mt-[11.5em] xl:mt-[3.5625em] cursor-pointer">
        <div className=" flex items-center justify-center">
          <div className="flex flex-col bg-[#E4C620] rounded-[3.125em]">
            <div className="flex items-center py-[0.75em] px-[1.5em] gap-[0.5em]">
              <p className="text-[#28252E] font-inter text-[1rem] font-bold ">
                View All Menus
              </p>
              <img src={viewMenusArrow} alt="" width={7} height={16} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
