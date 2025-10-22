import WomanHavingLunch from "src/assets/menu-hero-section/woman-having-lunch.jpg";
import MenuHeroSection from "./_components/menu-hero-section";
import Rectangle from "src/assets/discover-our-menu/Rectangle.svg";
import MenuDiscoverOurMenu from "./_components/menu-discover-our-menu";
import MenuDiscoverCards from "./_components/menu-discover-cards";

export default function Menu() {
  return (
    <>
      <div
        className="relative bg-cover bg-top flex flex-col"
        style={{ backgroundImage: `url(${WomanHavingLunch})` }}
      >
        <div className="absolute inset-0 bg-[#28252E] opacity-40"></div>

        <div className="z-10">
          <MenuHeroSection />
        </div>
      </div>

      <div
        className="flex flex-col bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, #28252E 0%, rgba(40, 37, 46, 0.30) 48.14%, #28252E 100%), url(${Rectangle})`,
        }}
      >
        <div className="z-10">
          <MenuDiscoverOurMenu />
          <MenuDiscoverCards />
        </div>
      </div>
    </>
  );
}
