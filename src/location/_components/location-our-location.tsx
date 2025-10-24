import Rectangle from "src/assets/location/Rectangle.svg";
import { motion } from "framer-motion";
export default function OurLocation() {
  return (
    <>
      <div className="flex flex-col  max-w-[1200px] lg:mx-auto  px-[1.25em] pt-[6.25em]">
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
          <img src={Rectangle} alt="" />

          <p className="text-[#E4C620] font-inter font-semibold uppercase">
            Locations
          </p>
        </motion.div>

        <motion.p
          className="text-center text-[#FFF4E2] font-literata text-[3.25rem] font-medium"
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

        <motion.p
          className="text-[#90A3B1] font-inter text-[1rem] font-normal text-center self-center lg:w-[26.4375em]"
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
