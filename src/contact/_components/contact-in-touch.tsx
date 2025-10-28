import rectangleGray from "src/assets/contact/rectangle-gray.svg";
import facebook from "src/assets/contact/facebook.svg";
import twitter from "src/assets/contact/twitter.svg";
import instagram from "src/assets/contact/instagram.svg";
import youtube from "src/assets/contact/youtube.svg";
import messageArrow from "src/assets/contact/message-arrow.svg";
import professionalChef from "src/assets/contact/professional-chef.jpg";
import { motion } from "framer-motion";

export default function ContactInTouch() {
  return (
    <>
      <div className="bg-[rgb(255,255,255)] my-[6.25em]">
        <div className="grid grid-cols-1 md:grid-cols-2   ">
          <div className="flex flex-col   p-[3em]">
            <motion.div
              className="flex items-center gap-[0.5em]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            >
              <img src={rectangleGray} alt="" className="object-cover" />
              <p className="text-[#90A3B1] font-inter text-[0.875rem] font-semibold uppercase">
                contact
              </p>
            </motion.div>

            <motion.p
              className="text-[#BB3A12] font-literata text-[3.25rem] font-medium"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            >
              Get In Touch
            </motion.p>

            <motion.p
              className="text-[#BB3A12] font-inter text-[1rem] font-bold mt-[2em]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            >
              Address
            </motion.p>

            <motion.p
              className="text-[#28252E] font-inter text-[1rem] font-normal border-b-2 border-[#90A3B1] pb-[1em]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            >
              768 Market Street San Francisco, CA 64015, United States
            </motion.p>

            <motion.p
              className="text-[#BB3A12] font-inter text-[1rem] font-bold mt-[1em]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            >
              Phone
            </motion.p>

            <motion.p
              className="text-[#28252E] font-inter text-[1rem] font-normal border-b-2 border-[#90A3B1] pb-[1em]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            >
              (+021) 345 678 910{" "}
            </motion.p>

            <motion.p
              className="text-[#BB3A12] font-inter text-[1rem] font-bold mt-[1em]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            >
              Email
            </motion.p>

            <motion.p
              className="text-[#28252E] font-inter text-[1rem] font-normal border-b-2 border-[#90A3B1] pb-[1em]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            >
              info@resto.com
            </motion.p>

            <motion.div
              className="flex items-center gap-[1em] mt-[2em]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            >
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
            </motion.div>
          </div>

          <div className="flex flex-col ">
            <motion.iframe
              title="Google Map - 768 Market Street"
              width="100%"
              height="600"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=768%20Market%20Street%20San%20Francisco,%20CA%2064015,%20United%20States+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            >
              <a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">
                popolazione per regione Italia mappa
              </a>
            </motion.iframe>
          </div>

          <div className="flex flex-col mt-[4em] md:mt-[0em]">
            <motion.img
              src={professionalChef}
              alt=""
              className="object-cover h-full "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            />
          </div>

          <div className="  bg-[#FFF4E2] p-[2em] ">
            <motion.div
              className="flex flex-col border border-dashed border-[#E4C620] p-[2em] "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                },
              }}
            >
              <motion.p
                className="text-[#BB3A12] text-center font-literata text-[1.75rem] font-normal"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Send Us Message
              </motion.p>
              <motion.p
                className="text-[#90A3B1] font-inter text-[1rem] font-normal text-center "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                id at mauris dis tincidunt ipsum.
              </motion.p>
              <motion.input
                type="text"
                className="py-[0.75em] px-[1em] border border-[#90A3B1] outline-none mt-[2em]"
                placeholder="Name"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              />

              <motion.input
                type="text"
                className="py-[0.75em] px-[1em] border border-[#90A3B1] outline-none mt-[2em]"
                placeholder="Email"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              />

              <motion.input
                type="text"
                className="pb-[5em] pt-[0.75em] px-[1em] border border-[#90A3B1] outline-none mt-[2em]"
                placeholder="Message"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              />

              <motion.button
                className="flex items-center self-start bg-[#E4C620] rounded-[3.125em] py-[0.75em] px-[1.5em] gap-[0.5em] mt-[1em]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
                  },
                }}
              >
                <p className="text-[#28252E] font-inter text-[1rem] font-bold">
                  Send Message
                </p>

                <img src={messageArrow} alt="" className="object-cover" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
