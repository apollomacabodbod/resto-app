import Rectangle from "src/assets/home-testimontials/Rectangle.svg";
import smilingFemale from "src/assets/home-testimontials/smiling-female.jpg";
import quotes from "src/assets/home-testimontials/quotes.svg";
import imageTwo from "src/assets/home-testimontials/image-two.png";
import imageOne from "src/assets/home-testimontials/image-one.png";
import { motion } from "framer-motion";

export default function MenuTestimontials() {
  return (
    <>
      <div className="flex flex-col static lg-custom:relative ">
        <div className="lg:flex lg:items-center ">
          {/* LEFT SIDE */}
          <div className="flex flex-col bg-[#37343E] py-[6.25em] lg:h-[47.8125em] lg:px-[4em] max-w-[1200px] lg:mx-auto px-[1.25em]">
            <motion.div
              className="flex items-center gap-[0.5em]"
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
                TESTIMONIALS
              </p>
            </motion.div>

            <motion.p
              className="text-[#FFF4E2] font-literata text-[3.25rem] font-normal"
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
              What People Says
            </motion.p>

            <motion.p
              className="text-[#90A3B1] font-inter text-[1rem] font-normal"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
              at mauris dis tincidunt ipsum faucibus ipsum.
            </motion.p>

            <div className="flex flex-col p-[2em] bg-[#FFF4E2] mt-[3.375em]">
              <motion.img
                src={quotes}
                alt=""
                className="h-[1.3434375em] min-w-[2em]"
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

              <motion.p
                className="text-[#BB3A12] font-literata text-[1.75rem] font-normal text-center mt-[1em]"
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
                Love the menus
              </motion.p>

              <motion.p
                className="text-[#28252E] font-inter text-[1rem] font-normal mt-[1em] text-center"
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
                Mauris dis tincidunt ipsum faucibus ipsum. At laoreet vivamus
                ultrices dolor vel nisl. Leo, ultrices enim vel feugiat lectus
                nisi, phasellus egestas. Nullam tellus
              </motion.p>

              <motion.img
                src={imageTwo}
                alt=""
                className="h-[3.75em] w-[3.75em] rounded-full object-cover bg-bottom self-center mt-[1em]"
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

              <motion.p
                className="mt-[0.5em] text-[#28252E] font-inter text-[1rem] font-bold text-center"
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
                Julia William
              </motion.p>

              <motion.p
                className="mt-[0.125em] text-[#90A3B1] font-inter text-[0.6875rem] font-normal text-center"
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
                Manager at Furniti
              </motion.p>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE INSTEAD OF BACKGROUND */}
          <div className="relative lg-custom:static w-full h-[47.8125em]">
            <motion.img
              src={smilingFemale}
              alt="Smiling Female"
              className="w-full h-full object-cover"
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

            {/* CARD OVERLAY */}
            <div className="absolute  top-[39.2%] lg-custom:top-[39.2%] w-[93%] lg-custom:w-[34.6875em] left-0 right-0 lg:right-[25%] lg-custom:right-[-47%] mx-auto   flex flex-col p-[2em]  bg-[#FFF4E2] max-w-[1200px] lg:mx-auto px-[1.25em]">
              <motion.img
                src={quotes}
                alt=""
                className="h-[1.3434375em] min-w-[2em]"
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

              <motion.p
                className="text-[#BB3A12] font-literata text-[1.75rem] font-normal text-center mt-[1em]"
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
                Love the menus
              </motion.p>

              <motion.p
                className="text-[#28252E] font-inter text-[1rem] font-normal mt-[1em] text-center"
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
                Mauris dis tincidunt ipsum faucibus ipsum. At laoreet vivamus
                ultrices dolor vel nisl. Leo, ultrices enim vel feugiat lectus
                nisi, phasellus egestas. Nullam tellus
              </motion.p>

              <motion.img
                src={imageOne}
                alt=""
                className="h-[3.75em] w-[3.75em] rounded-full object-cover bg-bottom self-center mt-[1em]"
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

              <motion.p
                className="mt-[0.5em] text-[#28252E] font-inter text-[1rem] font-bold text-center"
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
                Julia William
              </motion.p>

              <motion.p
                className="mt-[0.125em] text-[#90A3B1] font-inter text-[0.6875rem] font-normal text-center"
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
                Manager at Furniti
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
