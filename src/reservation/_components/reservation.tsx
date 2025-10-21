import Rectangle from "src/assets/reservation/Rectangle.svg";
import ReservationCard from "src/home/_components/home-reservation";
import AtRestaurant from "src/assets/reservation/at-restaurant.jpg";

export default function Reservation() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] lg:mx-auto px-[1.25em] gap-[1.875em] pt-[6.25em]">
        <div className="flex flex-col ">
          <div className="flex items-center gap-[0.5em]">
            <img src={Rectangle} alt="" className="object-cover" />

            <p className="text-[#E4C620] font-inter text-[0.875rem] font-semibold uppercase">
              reservation
            </p>
          </div>

          <p className="text-[#FFF4E2] font-literata text-[3.25rem] font-medium ">
            Make a Reservation
          </p>

          <p className="text-[#90A3B1] font-inter text-[1rem] font-normal  mt-[1em]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id at
            mauris dis tincidunt ipsum faucibus ipsum.
          </p>

          {/* second image */}

          <img
            src={AtRestaurant}
            alt=""
            className="object-cover h-full mt-[3.125em]"
          />
        </div>

        {/* second card */}
        <ReservationCard />
      </div>
    </>
  );
}
