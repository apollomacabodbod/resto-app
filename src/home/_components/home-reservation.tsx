import dropDown from "src/assets/home-cards/dropdown.svg";
import date from "src/assets/home-cards/date.svg";
import { useState } from "react";
export default function HomeReservation() {
  const [selectOpen, setSelectOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col bg-[#FFF3E0] shadow-[15px_15px_0_0_#BB3A12] p-[2em]">
        <form
          action=""
          className="flex flex-col border border-dashed border-[#E4C620] green p-[2em]"
        >
          <p className="text-[#BB3A12] font-literata text-[2.25rem] font-medium text-center ">
            Reservation
          </p>
          <p className="text-center text-[#28252E] font-inter font-semibold text-[1.25rem]">
            Online Booking
          </p>
          <p className="text-[1rem] text-[#90A3B1] font-inter font-normal text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id at
            mauris dis tincidunt ipsum.
          </p>
          <input
            type="text"
            className="border border-[#90A3B1] bg-[#FFF] py-[0.75em] px-[1em]"
            placeholder="Name"
          />

          {/* Custom Select with Arrow */}
          <div className="relative">
            <select
              className="w-full border border-[#90A3B1] bg-white py-[0.75em] px-[1em] appearance-none"
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
          </div>

          {/* Date Input with Custom Icon */}
          <div
            className="relative"
            onClick={() => {
              const input = document.getElementById(
                "date-input"
              ) as HTMLInputElement;
              input?.showPicker?.(); // modern browsers
              input?.focus(); // fallback
            }}
          >
            <input
              id="date-input"
              type="date"
              className="custom-date-input w-full border border-[#90A3B1] bg-[#FFF] py-[0.75em] px-[1em] pr-[2.5em]"
            />
            <img
              src={date}
              alt="Calendar Icon"
              className="w-[1em] h-[1em] absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </>
  );
}
