import rectangleGray from "src/assets/contact/rectangle-gray.svg";
import facebook from "src/assets/contact/facebook.svg";
import twitter from "src/assets/contact/twitter.svg";
import instagram from "src/assets/contact/instagram.svg";
import youtube from "src/assets/contact/youtube.svg";
import messageArrow from "src/assets/contact/message-arrow.svg";
import professionalChef from "src/assets/contact/professional-chef.jpg";

export default function ContactInTouch() {
  return (
    <>
      <div className="bg-[rgb(255,255,255)] my-[6.25em]">
        <div className="grid grid-cols-1 md:grid-cols-2   ">
          <div className="flex flex-col   p-[3em]">
            <div className="flex items-center gap-[0.5em]">
              <img src={rectangleGray} alt="" className="object-cover" />
              <p className="text-[#90A3B1] font-inter text-[0.875rem] font-semibold uppercase">
                contact
              </p>
            </div>

            <p className="text-[#BB3A12] font-literata text-[3.25rem] font-medium">
              Get In Touch
            </p>

            <p className="text-[#BB3A12] font-inter text-[1rem] font-bold mt-[2em]">
              Address
            </p>

            <p className="text-[#28252E] font-inter text-[1rem] font-normal border-b-2 border-[#90A3B1] pb-[1em]">
              768 Market Street San Francisco, CA 64015, United States
            </p>

            <p className="text-[#BB3A12] font-inter text-[1rem] font-bold mt-[1em]">
              Phone
            </p>

            <p className="text-[#28252E] font-inter text-[1rem] font-normal border-b-2 border-[#90A3B1] pb-[1em]">
              (+021) 345 678 910{" "}
            </p>

            <p className="text-[#BB3A12] font-inter text-[1rem] font-bold mt-[1em]">
              Email
            </p>

            <p className="text-[#28252E] font-inter text-[1rem] font-normal border-b-2 border-[#90A3B1] pb-[1em]">
              info@resto.com
            </p>

            <div className="flex items-center gap-[1em] mt-[2em]">
              <div className="bg-[#BB3A12] rounded-[6.25em] w-[2em] h-[2em] flex items-center justify-center">
                <img src={facebook} alt="" className="object-cover  " />
              </div>
              <div className="bg-[#BB3A12] rounded-[6.25em] w-[2em] h-[2em] flex items-center justify-center">
                <img src={twitter} alt="" className="object-cover  " />
              </div>
              <div className="bg-[#BB3A12] rounded-[6.25em] w-[2em] h-[2em] flex items-center justify-center">
                <img src={instagram} alt="" className="object-cover  " />
              </div>
              <div className="bg-[#BB3A12] rounded-[6.25em] w-[2em] h-[2em] flex items-center justify-center">
                <img src={youtube} alt="" className="object-cover  " />
              </div>
            </div>
          </div>

          <div className="flex flex-col ">
            {/* <img src={rightsideImage} alt="" className="object-cover h-full" /> */}

            <iframe
              width="100%"
              height="600"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=768%20Market%20Street%20San%20Francisco,%20CA%2064015,%20United%20States+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">
                popolazione per regione Italia mappa
              </a>
            </iframe>
          </div>

          <div className="flex flex-col mt-[4em] md:mt-[0em]">
            <img
              src={professionalChef}
              alt=""
              className="object-cover h-full "
            />
          </div>

          <div className="  bg-[#FFF4E2] p-[2em] ">
            <div className="flex flex-col border border-dashed border-[#E4C620] p-[2em] ">
              <p className="text-[#BB3A12] text-center font-literata text-[1.75rem] font-normal">
                Send Us Message
              </p>
              <p className="text-[#90A3B1] font-inter text-[1rem] font-normal text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                id at mauris dis tincidunt ipsum.
              </p>
              <input
                type="text"
                className="py-[0.75em] px-[1em] border border-[#90A3B1] outline-none mt-[2em]"
                placeholder="Name"
              />

              <input
                type="text"
                className="py-[0.75em] px-[1em] border border-[#90A3B1] outline-none mt-[2em]"
                placeholder="Email"
              />

              <input
                type="text"
                className="pb-[5em] pt-[0.75em] px-[1em] border border-[#90A3B1] outline-none mt-[2em]"
                placeholder="Message"
              />

              <button className="flex items-center self-start bg-[#E4C620] rounded-[3.125em] py-[0.75em] px-[1.5em] gap-[0.5em] mt-[1em]">
                <p className="text-[#28252E] font-inter text-[1rem] font-bold">
                  Send Message
                </p>

                <img src={messageArrow} alt="" className="object-cover" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
