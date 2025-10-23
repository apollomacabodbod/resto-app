import { useParams } from "react-router-dom";
import grilledChicken from "src/assets/blog/grilled-chicken.jpg";
import pennePasta from "src/assets/blog/penne-pasta.jpg";
import seafoodPasta from "src/assets/blog/seafood-pasta.jpg";
import pumpkinPieOn from "src/assets/blog/pumpkin-pie-on.jpg";
import traditionalChineseFood from "src/assets/blog/traditional-chinese-food.jpg";
import chineseCabbage from "src/assets/blog/chinese-cabbage.jpg";
import chineseMainCourse from "src/assets/blog/chinese-main-course.jpg";
import conceptOfTasty from "src/assets/blog/concept-of-tasty.jpg";
import deliciousFoodConcept from "src/assets/blog/delicious-food-concept.jpg";

export default function BlogDetail() {
  const { id } = useParams(); // URL param like /blog/5

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

    {
      id: 4,
      description: "Description for Item 3",
      comments: "July 18, 2022 No Comments",
      image: pumpkinPieOn,
    },

    {
      id: 5,
      description: "Description for Item 3",
      comments: "July 18, 2022 No Comments",
      image: traditionalChineseFood,
    },

    {
      id: 6,
      description: "Description for Item 3",
      comments: "July 18, 2022 No Comments",
      image: chineseCabbage,
    },

    {
      id: 7,
      description: "Description for Item 3",
      comments: "July 18, 2022 No Comments",
      image: chineseMainCourse,
    },

    {
      id: 8,
      description: "Description for Item 3",
      comments: "July 18, 2022 No Comments",
      image: conceptOfTasty,
    },

    {
      id: 9,
      description: "Description for Item 3",
      comments: "July 18, 2022 No Comments",
      image: deliciousFoodConcept,
    },
    // Add more items as needed
  ];

  // find blog by id
  const blog = data.find((item) => item.id === Number(id));

  return (
    <>
      <div className="flex flex-col">
        <h1>{blog?.comments}</h1>
        <p>{blog?.description}</p>
        <img
          src={blog?.image}
          alt={blog?.description}
          className="h-[31.25em] object-cover"
        />
      </div>
    </>
  );
}
