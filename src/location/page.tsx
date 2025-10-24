import womanAtRestaurant from "src/assets/location/woman-at-restaurant.jpg";
import LocationHeroSection from "./_components/location-hero-section";

export default function Location() {
  return (
    <>
      <div
        className="relative flex flex-col object-cover object-center"
        style={{ backgroundImage: `url(${womanAtRestaurant})` }}
      >
        <div className="absolute inset-0 bg-[#28252E] opacity-40"></div>

        <div className="z-10">
          <LocationHeroSection />
        </div>
      </div>
    </>
  );
}
