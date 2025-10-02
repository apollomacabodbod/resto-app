import HomeMenusRectangle from "src/assets/home-menus/home-menus-rectangle.svg";
import { motion } from "framer-motion";

export default function HomeMenus() {
  return (
    <>
      <div className="flex flex-col mt-[6.25em] max-w-[1200px] lg:mx-auto px-[1.25em]">
        <motion.div
          className="flex items-center justify-center gap-[0.5em]"
          initial="hidden"
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
          <img src={HomeMenusRectangle} alt="Home Menus Rectangle" />

          <p className="text-[#E4C620] font-inter text-[0.875rem] font-semibold uppercase tracking-[0.1875em]">
            Menus
          </p>
        </motion.div>

        <motion.p
          className="text-[#FFF4E2] text-center self-center font-literata font-medium  text-[3.25rem] "
          initial="hidden"
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
          Discover Our Menus
        </motion.p>

        <motion.p
          className="text-[#90A3B1]  text-[1rem] font-normal font-inter md:w-[26.4375em] text-center self-center mt-[1em]"
          initial="hidden"
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id at
          mauris dis tincidunt ipsum faucibus ipsum.
        </motion.p>
      </div>
    </>
  );
}
