import servedWedding from "src/assets/home-services/served-wedding.jpg";
import bookNow from "src/assets/home-services/booknow.svg";
import { motion } from "framer-motion";
export default function HomeServicesWedding() {
  return (
    <>
      <div className="flex flex-col mt-[3.9375em]">
        {/* On small devices: flex-col → image above text
            On md-custom and up: flex-row → text left, image right */}
        <div className="flex flex-col md-custom:flex-row md-custom:items-center">
          <motion.img
            src={servedWedding}
            alt=""
            className="w-full bg-cover md-custom:h-[15.8125em] order-1 md-custom:order-2"
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

          <div className="flex flex-col p-[2em] bg-[#28252E] md-custom:h-[15.8125em] order-2 md-custom:order-1">
            <motion.p
              className="text-[#FFF4E2] font-literata text-[1.75rem] font-normal"
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
              Wedding Event
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
              Mauris dis tincidunt ipsum faucibus ipsum laoret vivamus ultrices
              dolor vel nisl ultrices enim vel feugiat lectus nisi phasellus
              egestas
            </motion.p>

            <motion.button
              className="self-start flex items-center bg-[#E4C620] rounded-[3.125em] py-[0.75em] px-[1.5em] gap-[0.5em] mt-[1em]"
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
                Book Now
              </p>
              <img src={bookNow} alt="" />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
