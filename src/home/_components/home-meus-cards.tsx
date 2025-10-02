import traditionalChinese from "src/assets/home-menus-cards/traditional-chinese.jpg";
import pumpkinPie from "src/assets/home-menus-cards/concept-of-tasty.jpg";
import seafoodPasta from "src/assets/home-menus-cards/seafood-pasta.jpg";
import spaghettiMeatball from "src/assets/home-menus-cards/spaghetti-meatball.jpg";
import chineseMain from "src/assets/home-menus-cards/chinese-main.jpg";
import yummyPistachio from "src/assets/home-menus-cards/yummy-pistachio.jpg";

export default function HomeMenusCards() {
  const data = [
    {
      id: 1,
      title: "Traditional Chinese",
      description:
        "Lorem ipsum dolor amet consec tetur adipi elit morbi id at mauris dis tincidunt.",
      price: 30,
      image: traditionalChinese,
    },
    {
      id: 2,
      title: "Pumpkin Pie",
      description:
        "Lorem ipsum dolor amet consec tetur adipi elit morbi id at mauris dis tincidunt.",
      price: 30,
      image: pumpkinPie,
    },
    {
      id: 3,
      title: "Seafood Pasta",
      description:
        "Lorem ipsum dolor amet consec tetur adipi elit morbi id at mauris dis tincidunt.",
      price: 30,
      image: seafoodPasta,
    },
    {
      id: 4,
      title: "Chinese Main",
      description:
        "Lorem ipsum dolor amet consec tetur adipi elit morbi id at mauris dis tincidunt.",
      price: 30,
      image: chineseMain,
    },
    {
      id: 5,
      title: "Spaghetti Meatball",
      description:
        "Lorem ipsum dolor amet consec tetur adipi elit morbi id at mauris dis tincidunt.",
      price: 30,
      image: spaghettiMeatball,
    },
    {
      id: 6,
      title: "Pistachio",
      description:
        "Lorem ipsum dolor amet consec tetur adipi elit morbi id at mauris dis tincidunt.",
      price: 30,
      image: yummyPistachio,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] lg:mx-auto px-[1.25em] gap-y-[11em] gap-[3.75em] xl:gap-[3.75em] mt-[3.6875em]">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative flex flex-col bg-cover bg-center bg-no-repeat h-[12.5em] w-full xl:w-[12.5em]"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          {/* Absolute box */}
          <div
            className="
      absolute 
      bottom-[-9.3em]
      xl:left-[11.125em]
      xl:bottom-[0]
      xl:top-1/2  xl:-translate-y-1/2
      bg-[#37343E] 
      p-[2em]
      xl:w-[22.5em]
      xl:h-[11.125em]
      w-full
    "
          >
            <div className="flex items-center justify-between">
              <p className="text-[#FFF4E2] font-literata text-[1.5rem] font-medium ">
                {item.title}
              </p>
              <p className="text-[#E4C620] font-inter text-[1.25rem] font-semibold">
                ${item.price}
              </p>
            </div>

            <p className="text-[#90A3B1] font-inter text-[1rem] font-normal mt-[0.05em]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
