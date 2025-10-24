import Rectangle from "src/assets/blog/Rectangle.svg";
import { motion } from "framer-motion";
export default function BlogDetailComments() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto  px-[1.25em] mt-[6.625em]">
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
            Comments
          </p>
        </motion.div>

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
          Leave a Reply
        </motion.p>

        <motion.p
          className="text-[#90A3B1] font-inter text-[1rem] font-normal mt-[0.5em]"
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
          Your email address will not be published. Required fields are marked *
        </motion.p>
      </div>
    </>
  );
}
