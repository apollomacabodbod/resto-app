import commentArrow from "src/assets/blog/comment-arrow.svg";
import { motion } from "framer-motion";
export default function BlogDetailPostComment() {
  return (
    <>
      <div className="bg-[#FFF4E2] p-[2em] mt-[1.875em]">
        <form className="flex flex-col border border-dashed border-[#E4C620] p-[2em] gap-[1em]">
          <motion.input
            type="text"
            className="px-[1em] pt-[0.75em] pb-[4em] border border-[#90A3B1] outline-none"
            placeholder="Comment"
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

          <motion.input
            type="text"
            className="px-[1em] py-[0.75em] border border-[#90A3B1] outline-none"
            placeholder="Name"
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

          <motion.input
            type="text"
            className="px-[1em] py-[0.75em] border border-[#90A3B1] outline-none"
            placeholder="Email address"
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

          <motion.input
            type="text"
            className="px-[1em] py-[0.75em] border border-[#90A3B1] outline-none"
            placeholder="Website (Optional)"
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

          <motion.button
            className="flex items-center self-start bg-[#E4C620] py-[0.75em] px-[1.5em] rounded-[3.125em] gap-[0.5em]"
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
            <p className="text-[#28252E] font-inter text-[1rem] font-bold">
              Post Comment
            </p>

            <img src={commentArrow} alt="" />
          </motion.button>
        </form>
      </div>
    </>
  );
}
