import HomeCards from "./home-cards";
import HomeReservation from "./home-reservation";

export default function HomeServeWrapper() {
  return (
    <>
      <div className="grid grid-cols-1  lg:grid-cols-2 max-w-[1200px] lg:mx-auto px-[1.25em]  border border-[#50B498] green">
        <div className="flex flex-col ">
          <HomeCards />
          <HomeReservation />
        </div>
      </div>
    </>
  );
}
