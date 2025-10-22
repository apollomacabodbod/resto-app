import WomanHavingLunch from "src/assets/menu-hero-section/woman-having-lunch.jpg";
import MenuHeroSection from "./_components/menu-hero-section";

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
    </>
  );
}
