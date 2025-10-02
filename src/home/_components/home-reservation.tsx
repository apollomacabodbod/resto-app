import dropDown from "src/assets/home-cards/dropdown.svg";
import date from "src/assets/home-cards/date.svg";
import serveButton from "src/assets/home-cards/serve-button.svg";
import { useState } from "react";
import { motion } from "framer-motion";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function HomeReservation() {
  const [selectOpen, setSelectOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <>
      <div className="flex flex-col bg-[#FFF3E0] shadow-[15px_15px_0_0_#BB3A12] p-[2em] mt-[3em] lg:mt-[0em]">
        <form
          action=""
          className="flex flex-col border border-dashed border-[#E4C620] green p-[2em]"
        >
          <motion.p
            className="text-[#BB3A12] font-literata text-[2.25rem] font-medium text-center "
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
            Reservation
          </motion.p>
          <motion.p
            className="text-center text-[#28252E] font-inter font-semibold text-[1.25rem]"
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
            Online Booking
          </motion.p>
          <motion.p
            className="text-[1rem] text-[#90A3B1] font-inter font-normal text-center mt-[1em]"
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
            mauris dis tincidunt ipsum.
          </motion.p>
          <motion.input
            type="text"
            className="border border-[#90A3B1] bg-[#FFF] py-[0.75em] px-[1em] mt-[2em]"
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

          {/* Custom Select with Arrow */}
          <motion.div
            className="relative mt-[1em]"
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
            <select
              className="w-full  border border-[#90A3B1] bg-white py-[0.75em] px-[1em] appearance-none"
              onFocus={() => setSelectOpen(true)}
              onBlur={() => setSelectOpen(false)}
            >
              <option>1 People</option>
              <option>2 People</option>
              <option>3 People</option>
            </select>

            <img
              src={dropDown}
              alt="Dropdown Icon"
              className={`w-[0.5625em] h-[1em] absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                selectOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </motion.div>

          <div className="relative mt-[1em] w-full">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Date"
              dateFormat="MM/dd/yyyy"
              className="w-full border border-[#90A3B1] bg-[#FFF] py-[0.75em] pl-[1em] pr-[2.5em]  focus:outline-none"
              wrapperClassName="w-full" // 👈 Force DatePicker wrapper to full width
            />

            {/* Calendar Icon */}
            <img
              src={date}
              alt="Calendar Icon"
              className="w-[1em] h-[1em] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>

          <motion.input
            type="text"
            className="border border-[#90A3B1] bg-[#FFF] py-[0.75em] px-[1em] mt-[1em]"
            placeholder="Phone"
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
            className="border border-[#90A3B1] bg-[#FFF] py-[0.75em] px-[1em] mt-[1em]"
            placeholder="Email Address"
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
            className="flex flex-col bg-[#E4C620] py-[0.75em] px-[1.5em] rounded-[3.125em] mt-[1em]"
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
            <div className="flex items-center gap-[0.5em] justify-center">
              <p className="text-[#28252E] font-inter text-[1rem] font-bold ">
                Book Now
              </p>
              <img
                src={serveButton}
                alt="serve button"
                className="w-[0.4375em]"
              />
            </div>
          </motion.button>
        </form>
      </div>
    </>
  );
}
