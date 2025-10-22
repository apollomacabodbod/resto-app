import closedRestaurant from "src/assets/blog/closed-restaurant-.jpg";
import buttonArrow from "src/assets/blog/button-arrow.svg";
import { motion } from "framer-motion";
export default function BlogReadMore() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[4em] mt-[3.375em]">
        <motion.div
          className="flex flex-col"
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
          <img src={closedRestaurant} alt="" className="object-cover" />
        </motion.div>

        <div className="flex flex-col">
          <motion.p
            className="text-[#FFF4E2] font-inter text-[2rem] font-semibold "
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
            Super Easy Baked Feta Pasta
          </motion.p>
          <motion.p
            className="text-[#90A3B1] font-inter text-[1rem] font-normal mt-[1em]"
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
            July 18, 2022 No Comments
          </motion.p>
          <motion.p
            className="text-[#90A3B1] font-inter text-[1rem] font-normal mt-[2em]"
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
            Blandit integer suspendisse velit iaculis duis neque. Massa quam
            iaculis porttitor pulvinar Condi Sapien ullamcorper mauris ornare eu
            mauris. Blandit integer suspendisse velit iaculis duis neque. Massa
            quam iaculis porttitor pulvinar Condi Sapien ullamcorper mauris
            ornare eu mauris.
          </motion.p>

          <motion.div
            className="flex items-center gap-[0.5em] mt-[2em] cursor-pointer"
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
            <p className="text-[#E4C620] font-inter text-[1rem] font-bold ">
              Readmore
            </p>

            <img src={buttonArrow} alt="" className="object-cover" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
