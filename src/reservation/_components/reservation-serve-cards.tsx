import chineseMain from "src/assets/home-cards/chinese-main.jpg";
import yummyPistachio from "src/assets/home-cards/yummy-pistachio.jpg";
import chickenTikka from "src/assets/home-cards/chicken-tikka.jpg";
import pumpkinPie from "src/assets/home-cards/pumpkin-pie.jpg";
import { motion } from "framer-motion";

const fakeData = [
  {
    title: "Starters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: chineseMain,
  },
  {
    title: "Starters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: yummyPistachio,
  },
  {
    title: "Starters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: chickenTikka, // reuse for now
  },
  {
    title: "Starters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: pumpkinPie, // reuse for now
  },
];

export default function ReservationServeCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  pb-[6.25em] pt-[2.5em] gap-y-[6.75em] gap-x-[1.875em]  max-w-[1200px] lg:mx-auto px-[1.25em]">
      {fakeData.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col w-full"
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
          {/* Image instead of background */}
          <div
            key={index}
            className="relative h-[18.25em] bg-cover bg-center bg-no-repeat  "
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Optional overlay for text */}
            <motion.div
              className="absolute flex flex-col  w-full md:w-auto bg-[#37343E] text-white  top-[13.0625em] md:top-[12.0625em] p-[1.5em] md:mx-[1.520625em]"
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
              <h2 className="text-[#FFF4E2] text-[1.5rem] font-literata font-medium">
                {item.title}
              </h2>
              <p className="mt-[0.5em] text-[#90A3B1] font-inter text-[1rem] font-normal ">
                {item.description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
