import grilledChicken from "src/assets/latest-news/grilled-chicken.jpg";
import pennePasta from "src/assets/latest-news/penne-pasta.jpg";
import seafoodPasta from "src/assets/latest-news/seafood-pasta.jpg";

export default function HomeLatestNewsCards() {
  const data = [
    {
      id: 1,
      description: "Description for Item 1",
      comments: "July 18, 2022 No Comments",
      image: grilledChicken,
    },
    {
      id: 2,
      description: "Description for Item 2",
      comments: "July 18, 2022 No Comments",
      image: pennePasta,
    },
    {
      id: 3,
      description: "Description for Item 3",
      comments: "July 18, 2022 No Comments",
      image: seafoodPasta,
    },
    // Add more items as needed
  ];

  return (
    <>
      <div className="bg-[#28252E] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] lg:mx-auto px-[1.25em] gap-[1.875em]">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col">
              <img
                src={item.image}
                alt=""
                className="md:h-[14.375em] w-full lg:w-[22.5em] object-cover object-center  "
              />
              <p className="text-[#FFF4E2] font-inter text-[1.25rem] font-semibold mt-[1em]">
                Super Easy Baked Feta Pasta
              </p>
              <p className="text-[#90A3B1] font-inter text-[1rem] font-normal mt-[0.5em] ">
                July 18, 2022 No Comments
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
