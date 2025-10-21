import happyYoungFriends from "src/assets/reservation/happy-young-friends.jpg";
import ReservationHeroSection from "./_components/reservation-hero-section";
import Reservation from "./_components/reservation";
import HomeServe from "../home/_components/home-serve";
import HomeCards from "../home/_components/home-cards";
import ReservationServeCards from "./_components/reservation-serve-cards";

export default function HomeReservation() {
  return (
    <>
      <div
        className="relative bg-cover bg-top flex flex-col "
        style={{ backgroundImage: `url(${happyYoungFriends})` }}
      >
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-[#28252E] opacity-40"></div>

        {/* Hero text section */}
        <div className="z-10 ">
          <ReservationHeroSection />
        </div>
      </div>

      <div className="bg-[#28252E] ">
        <Reservation />
        <HomeServe />
        <ReservationServeCards />
      </div>
    </>
  );
}
