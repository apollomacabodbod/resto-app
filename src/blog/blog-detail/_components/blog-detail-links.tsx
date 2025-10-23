import facebook from "src/assets/blog/facebook.svg";
import twitter from "src/assets/blog/twitter.svg";
import instagram from "src/assets/blog/instagram.svg";
import youtube from "src/assets/blog/youtube.svg";
import { motion } from "framer-motion";
export default function BlogDetailLinks() {
  return (
    <>
      <div className="mt-[4em]">
        <motion.div
          className="flex flex-col bg-[#37343E]  max-w-[1200px] lg:mx-auto  px-[1.25em]"
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
          <div className="sm:flex sm:items-center gap-[1em] sm:justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-[1em]">
                <motion.p
                  className="text-[#FFF4E2] font-inter text-[1rem] font-bold"
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
                  Share:{" "}
                </motion.p>
                <motion.img
                  src={facebook}
                  alt=""
                  className="h-[1em] cursor-pointer"
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
                />
                <motion.img
                  src={twitter}
                  alt=""
                  className="h-[1em] cursor-pointer"
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
                />
                <motion.img
                  src={instagram}
                  alt=""
                  className="h-[1em] cursor-pointer"
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
                />
                <motion.img
                  src={youtube}
                  alt=""
                  className="h-[1em] cursor-pointer"
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
                />
              </div>
            </div>

            <div className="flex flex-col mt-[1em] sm:mt-0">
              <div className="sm:flex sm:items-center">
                <div className="flex items-center justify-between">
                  <motion.p
                    className="text-[#FFF4E2] font-inter text-[1rem] font-bold cursor-pointer"
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
                    Interior<span className="hidden sm:inline">,</span>
                  </motion.p>
                  <motion.p
                    className="text-[#FFF4E2] font-inter text-[1rem] font-bold sm:ml-2 cursor-pointer"
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
                    Furniture<span className="hidden sm:inline">,</span>
                  </motion.p>
                </div>

                <div className="flex items-center justify-between">
                  <motion.p
                    className="text-[#FFF4E2] font-inter text-[1rem] font-bold sm:ml-2 cursor-pointer"
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
                    Decoration<span className="hidden sm:inline">,</span>
                  </motion.p>
                  <motion.p
                    className="text-[#FFF4E2] font-inter text-[1rem] font-bold sm:ml-2 cursor-pointer"
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
                    Renovation
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
