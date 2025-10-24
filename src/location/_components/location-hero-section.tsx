import { Link } from "react-router-dom";
import heroSectionArrow from "src/assets/reservation/hero-section-arrow.svg";
import { motion } from "framer-motion";

export default function LocationHeroSection() {
  return (
    <>
      <div className="z-10 flex flex-col mt-[7.40625em] mb-[8.71875em] max-w-[1200px] lg:mx-auto px-[1.375em]">
        {/* Title */}
        <motion.p
          className="text-[#FFF] font-literata text-[3.375rem]  lg:text-[5.375rem] font-medium "
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
          Our Locations
        </motion.p>

        <motion.div
          className="flex items-center gap-[1.875em]"
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
          <Link
            to={"/"}
            className="text-[#FFF] font-inter text-[1rem] font-bold"
          >
            {" "}
            Home
          </Link>
          <img src={heroSectionArrow} alt="arrow" />
          <p className="text-[#E4C620] font-inter text-[1rem] font-bold cursor-pointer">
            Our Locations
          </p>
        </motion.div>
      </div>
    </>
  );
}
