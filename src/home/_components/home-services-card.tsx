import rectangleServices from "src/assets/home-services/rectangle-services.svg";
import learnMoreButton from "src/assets/home-services/learn-more.svg";

export default function HomeServicesCard() {
  return (
    <>
      <div className="max-w-[1200px] lg:mx-auto px-[1.25em] mt-[6.5em]">
        <div className="flex flex-col bg-[#BB3A12] px-[1.25em] xl:px-[7.125em] pt-[6.25em] ">
          <div className="lg:flex lg:items-center lg:gap-[2em]">
            {/* card 1 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-[0.5em]">
                <img src={rectangleServices} alt="" />
                <p className="text-[#E4C620] font-inter text-[0.875rem] font-semibold uppercase">
                  services
                </p>
              </div>

              <p className="text-[#FFF4E2] font-literata text-[3.25rem] font-medium lg:whitespace-nowrap ">
                Our Services
              </p>
            </div>
            {/* Card 2 */}

            <div className="flex flex-col">
              <div className="lg:flex lg:items-center lg:gap-[2em]">
                <p className="text-[#FFF4E2] font-inter text-[1rem] font-normal">
                  Sed nulla sed purus vitasse. urna est iverra sed etiam
                  quisque. Nisl in pulvinar ultrices
                </p>

                <button className="flex items-center mt-[2em] lg:mt-[0] border border-[#FFF4E2] py-[0.75em] px-[1.5em] gap-[0.5em] rounded-[3.125em]">
                  <p className="whitespace-nowrap text-[#FFF4E2] font-inter text-[1.25rem] font-semibold">
                    Learn More
                  </p>
                  <img src={learnMoreButton} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
