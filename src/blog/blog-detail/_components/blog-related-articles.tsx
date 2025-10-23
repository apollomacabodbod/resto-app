import Rectangle from "src/assets/blog/Rectangle.svg";
import { motion } from "framer-motion";

export default function BlogRelatedArticles() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] pt-[6.25em]">
        <motion.div
          className="flex items-center gap-[0.5em]"
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
          <p className="text-[#E4C620] font-inter text-[0.875rem] font-semibold uppercase">
            Blog
          </p>
        </motion.div>

        <div className="lg:flex lg:items-center gap-[2em] ">
          <motion.p
            className="text-[#FFF4E2] font-literata text-[3.25rem] font-medium"
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
            Related Articles
          </motion.p>

          <motion.p
            className="lg:w-[25.1875em] text-[#90A3B1] font-inter text-[1rem] font-normal"
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
            Sed nulla sed purus vitasse. urna est iverra sed etiam quisque. Nisl
            in pulvinar ultrices tempusut dui{" "}
          </motion.p>
        </div>
      </div>
    </>
  );
}
