import viewMenusArrow from "src/assets/home-view-menus/view-menus-arrow.svg";
import { motion } from "framer-motion";
export default function MenuViewMenus() {
  return (
    <>
      {" "}
      <motion.div
        className="flex flex-col mb-[5em] mt-[11.5em]  xl:my-[3.5625em] cursor-pointer"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
          },
        }}
      >
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
      </motion.div>
    </>
  );
}
