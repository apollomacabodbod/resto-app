import festiveDinner from "src/assets/location/festive-dinner.jpg";
import gourmetCuisine from "src/assets/location/gourmet-cuisine.jpg";
import multiCulturalGroup from "src/assets/location/multi-cultural-group.jpg";
import professionalChef from "src/assets/location/professional-chef.jpg";
import womanAtRestaurant from "src/assets/location/woman-at-restaurant.jpg";
import workingInRestaurant from "src/assets/location/working-in-restaurant.jpg";
import locationArrow from "src/assets/location/location-arrow.svg";
import { motion } from "framer-motion";

export default function LocationCards() {
  const fakeData = [
    {
      id: 1,
      city: "New York",
      address: "151 King Street, New York 3051, USA",
      image: festiveDinner,
    },
    {
      id: 2,
      city: "New York",
      address: "151 King Street, New York 3051, USA",
      image: gourmetCuisine,
    },
    {
      id: 3,
      city: "New York",
      address: "151 King Street, New York 3051, USA",
      image: multiCulturalGroup,
    },
    {
      id: 4,
      city: "New York",
      address: "151 King Street, New York 3051, USA",
      image: professionalChef,
    },

    {
      id: 5,
      city: "New York",
      address: "151 King Street, New York 3051, USA",
      image: womanAtRestaurant,
    },

    {
      id: 6,
      city: "New York",
      address: "151 King Street, New York 3051, USA",
      image: workingInRestaurant,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] lg:mx-auto  px-[1.25em] gap-[1.875em] gap-y-[9.5em] pb-[8em] pt-[3.375em]">
        {fakeData.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-cover bg-center flex flex-col h-[15.625em] relative "
            style={{ backgroundImage: `url(${item.image})` }}
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
            <div className="bg-[#37343E] w-[18.3125em] py-[1em] px-[1.5em] absolute top-[12.65625em]">
              <div className="flex flex-col gap-[0.5em]">
                <motion.p
                  className="text-[#FFF4E2] font-literata font-medium "
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
                  New York
                </motion.p>

                <motion.p
                  className="text-[#FFF4E2] font-inter text-[0.6875rem] font-normal "
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
                  className="text-[#90A3B1] font-inter text-[1rem] font-normal"
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
                  151 King Street, New York 3051, USA
                </motion.p>

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
                  <p className="text-[#E4C620] font-inter text-[0.6875rem] font-normal">
                    Get Direction
                  </p>

                  <img src={locationArrow} alt="" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
