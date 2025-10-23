import Rectangle from "src/assets/latest-news/Rectangle.svg";
import ArrowButton from "src/assets/latest-news/arrow-button.svg";
import { motion } from "framer-motion";
export default function HomeLatestNews() {
  return (
    <>
      <div className="bg-[#28252E] ">
        <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] bg-[#28252E] py-[6.25em]">
          <motion.div
            className="flex items-center gap-[0.5em] "
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

          <div className="lg:flex lg:items-center  gap-[2em] ">
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
              Latest News
            </motion.p>
            <motion.p
              className="text-[#90A3B1] font-inter text-[1rem] font-normal lg:w-[25.1875em] "
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
              Sed nulla sed purus vitasse. urna est iverra sed etiam quisque.
              Nisl in pulvinar ultrices tempusut dui{" "}
            </motion.p>

            <motion.button
              className="flex items-center border  border-[#FFF4E2] rounded-[3.125em] py-[0.75em] px-[1.5em] gap-[0.5em] mt-[1.5em] lg:mt-[0em]"
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
              <p className="text-[#FFF4E2] font-inter text-[1rem] font-bold whitespace-nowrap">
                View All
              </p>
              <img src={ArrowButton} alt="" />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
