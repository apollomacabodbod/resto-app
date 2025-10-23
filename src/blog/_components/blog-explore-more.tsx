import { motion } from "framer-motion";

export default function BlogExploreMore() {
  return (
    <>
      <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] mt-[6.25em]">
        <motion.p
          className="text-[#FFF4E2] font-literata text-[2.25rem] font-medium"
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
          Explore More Blog
        </motion.p>
      </div>
    </>
  );
}
