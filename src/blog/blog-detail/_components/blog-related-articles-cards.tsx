import grilledChicken from "src/assets/latest-news/grilled-chicken.jpg";
import pennePasta from "src/assets/latest-news/penne-pasta.jpg";
import seafoodPasta from "src/assets/latest-news/seafood-pasta.jpg";
import { motion } from "framer-motion";

export default function BlogRelatedArticlesCards() {
  const data = [
    {
      id: 1,
      description: "Description for Item 1",
      comments: "July 18, 2022 No Comments",
      image: grilledChicken,
    },
    {
      id: 2,
      description: "Description for Item 2",
      comments: "July 18, 2022 No Comments",
      image: pennePasta,
    },
    {
      id: 3,
      description: "Description for Item 3",
      comments: "July 18, 2022 No Comments",
      image: seafoodPasta,
    },
    // Add more items as needed
  ];

  return (
    <>
      <div className="bg-[#28252E] mt-[3.9375em]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] lg:mx-auto px-[1.25em] gap-[1.875em]">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col">
              <motion.img
                src={item.image}
                alt=""
                className="md:h-[14.375em] w-full lg:w-[22.5em] object-cover object-center  "
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
                className="text-[#FFF4E2] font-inter text-[1.25rem] font-semibold mt-[1em]"
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
                className="text-[#90A3B1] font-inter text-[1rem] font-normal mt-[0.5em] "
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
