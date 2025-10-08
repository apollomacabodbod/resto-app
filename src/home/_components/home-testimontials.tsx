import Rectangle from "src/assets/home-testimontials/Rectangle.svg";
import smilingFemale from "src/assets/home-testimontials/smiling-female.jpg";
import quotes from "src/assets/home-testimontials/quotes.svg";
import imageTwo from "src/assets/home-testimontials/image-two.png";
import imageOne from "src/assets/home-testimontials/image-one.png";

export default function HomeTestimontials() {
  return (
    <>
      <div className="flex flex-col static lg-custom:relative">
        <div className="lg:flex lg:items-center">
          {/* LEFT SIDE */}
          <div className="flex flex-col bg-[#37343E] py-[6.25em] lg:h-[47.8125em] lg:px-[4em] max-w-[1200px] lg:mx-auto px-[1.25em]">
            <div className="flex items-center gap-[0.5em]">
              <img src={Rectangle} alt="" />
              <p className="text-[#E4C620] font-inter text-[0.875rem] font-semibold uppercase">
                TESTIMONIALS
              </p>
            </div>

            <p className="text-[#FFF4E2] font-literata text-[3.25rem] font-normal">
              What People Says
            </p>

            <p className="text-[#90A3B1] font-inter text-[1rem] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
              at mauris dis tincidunt ipsum faucibus ipsum.
            </p>

            <div className="flex flex-col p-[2em] bg-[#FFF4E2] mt-[3.375em]">
              <img
                src={quotes}
                alt=""
                className="h-[1.3434375em] min-w-[2em]"
              />

              <p className="text-[#BB3A12] font-literata text-[1.75rem] font-normal text-center mt-[1em]">
                Love the menus
              </p>

              <p className="text-[#28252E] font-inter text-[1rem] font-normal mt-[1em] text-center">
                Mauris dis tincidunt ipsum faucibus ipsum. At laoreet vivamus
                ultrices dolor vel nisl. Leo, ultrices enim vel feugiat lectus
                nisi, phasellus egestas. Nullam tellus
              </p>

              <img
                src={imageTwo}
                alt=""
                className="h-[3.75em] w-[3.75em] rounded-full object-cover bg-bottom self-center mt-[1em]"
              />

              <p className="mt-[0.5em] text-[#28252E] font-inter text-[1rem] font-bold text-center">
                Julia William
              </p>

              <p className="mt-[0.125em] text-[#90A3B1] font-inter text-[0.6875rem] font-normal text-center">
                Manager at Furniti
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE INSTEAD OF BACKGROUND */}
          <div className="relative lg-custom:static w-full h-[47.8125em]">
            <img
              src={smilingFemale}
              alt="Smiling Female"
              className="w-full h-full object-cover"
            />

            {/* CARD OVERLAY */}
            <div className="absolute  top-[39.2%] lg-custom:top-[39.2%] w-[93%] lg-custom:w-[34.6875em] left-0 right-0 lg:right-[25%] lg-custom:right-[-47%] mx-auto   flex flex-col p-[2em]  bg-[#FFF4E2] max-w-[1200px] lg:mx-auto px-[1.25em]">
              <img
                src={quotes}
                alt=""
                className="h-[1.3434375em] min-w-[2em]"
              />

              <p className="text-[#BB3A12] font-literata text-[1.75rem] font-normal text-center mt-[1em]">
                Love the menus
              </p>

              <p className="text-[#28252E] font-inter text-[1rem] font-normal mt-[1em] text-center">
                Mauris dis tincidunt ipsum faucibus ipsum. At laoreet vivamus
                ultrices dolor vel nisl. Leo, ultrices enim vel feugiat lectus
                nisi, phasellus egestas. Nullam tellus
              </p>

              <img
                src={imageOne}
                alt=""
                className="h-[3.75em] w-[3.75em] rounded-full object-cover bg-bottom self-center mt-[1em]"
              />

              <p className="mt-[0.5em] text-[#28252E] font-inter text-[1rem] font-bold text-center">
                Julia William
              </p>

              <p className="mt-[0.125em] text-[#90A3B1] font-inter text-[0.6875rem] font-normal text-center">
                Manager at Furniti
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
