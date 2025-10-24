import croppedImage from "src/assets/contact/cropped-image.jpg";
import ContactHeroSection from "./_components/contact-hero-section";

export default function Contact() {
  return (
    <>
      <div
        className="relative bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url(${croppedImage})` }}
      >
        <div className="absolute inset-0 bg-[#28252E] opacity-40"></div>

        <div className="z-10">
          <ContactHeroSection />
        </div>
      </div>
    </>
  );
}
