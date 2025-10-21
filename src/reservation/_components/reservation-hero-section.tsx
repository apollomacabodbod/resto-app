import { Link } from "react-router-dom";
import heroSectionArrow from "src/assets/reservation/hero-section-arrow.svg";

export default function ReservationHeroSection() {
  return (
    <>
      <div className="z-10 flex flex-col mt-[7.40625em] mb-[8.71875em] max-w-[1200px] lg:mx-auto px-[1.375em]">
        {/* Title */}
        <p className="text-[#FFF] font-literata text-[3.375rem]  lg:text-[5.375rem] font-medium ">
          Make a Reservation
        </p>

        {/* Breadcrumb */}
        <div className="flex items-center gap-[1.875em]">
          <Link
            to={"/"}
            className="text-[#FFF] font-inter text-[1rem] font-bold"
          >
            {" "}
            Home
          </Link>
          <img src={heroSectionArrow} alt="arrow" />
          <p className="text-[#E4C620] font-inter text-[1rem] font-bold cursor-pointer">
            Make a Reservation
          </p>
        </div>
      </div>
    </>
  );
}
