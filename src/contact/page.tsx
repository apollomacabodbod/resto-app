import croppedImage from "src/assets/contact/cropped-image.jpg";
import ContactHeroSection from "./_components/contact-hero-section";
import ContactInTouch from "./_components/contact-in-touch";

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

      <div className="relative flex flex-col bg-gradient-to-b from-[#BB3A12] to-[#28252E]/100">
        <div className="absolute inset-0 bg-black/50 "></div>

        <div className="relative flex flex-col ">
          <ContactInTouch />
        </div>
      </div>
    </>
  );
}
