import Rectangle from "src/assets/reservation/Rectangle.svg";
import ReservationCard from "src/home/_components/home-reservation";
import AtRestaurant from "src/assets/reservation/at-restaurant.jpg";
import { motion } from "framer-motion";

export default function Reservation() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] lg:mx-auto px-[1.25em] gap-[1.875em] pt-[6.25em]">
        <div className="flex flex-col ">
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
            <img src={Rectangle} alt="" className="object-cover" />

            <p className="text-[#E4C620] font-inter text-[0.875rem] font-semibold uppercase">
              reservation
            </p>
          </motion.div>

          <motion.p
            className="text-[#FFF4E2] font-literata text-[3.25rem] font-medium "
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
            Make a Reservation
          </motion.p>

          <motion.p
            className="text-[#90A3B1] font-inter text-[1rem] font-normal  mt-[1em]"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id at
            mauris dis tincidunt ipsum faucibus ipsum.
          </motion.p>

          {/* second image */}

          <motion.img
            src={AtRestaurant}
            alt=""
            className="object-cover h-full mt-[3.125em]"
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

        {/* second card */}
        <ReservationCard />
      </div>
    </>
  );
}
