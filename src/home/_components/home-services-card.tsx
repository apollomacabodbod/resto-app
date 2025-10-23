import rectangleServices from "src/assets/home-services/rectangle-services.svg";
import learnMoreButton from "src/assets/home-services/learn-more.svg";
import { motion } from "framer-motion";
export default function HomeServicesCard() {
  return (
    <>
      <div className="lg:flex lg:items-center lg:gap-[2em]">
        {/* card 1 */}
        <div className="flex flex-col">
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
            <img src={rectangleServices} alt="" />
            <p className="text-[#E4C620] font-inter text-[0.875rem] font-semibold uppercase">
              services
            </p>
          </motion.div>

          <motion.p
            className="text-[#FFF4E2] font-literata text-[3.25rem] font-medium lg:whitespace-nowrap "
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
            Our Services
          </motion.p>
        </div>
        {/* Card 2 */}

        <div className="flex flex-col">
          <div className="lg:flex lg:items-center lg:gap-[2em]">
            <motion.p
              className="text-[#FFF4E2] font-inter text-[1rem] font-normal"
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
              Nisl in pulvinar ultrices
            </motion.p>

            <motion.button
              className="flex items-center mt-[2em] lg:mt-[0] border border-[#FFF4E2] py-[0.75em] px-[1.5em] gap-[0.5em] rounded-[3.125em]"
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
              <p className="whitespace-nowrap text-[#FFF4E2] font-inter text-[1.25rem] font-semibold">
                Learn More
              </p>
              <img src={learnMoreButton} alt="" />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
