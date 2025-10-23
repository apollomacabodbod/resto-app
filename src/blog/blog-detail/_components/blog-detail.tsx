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
      <div className="bg-[#28252E]">
        <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] mt-[8.125em]">
          {/* <h1>{blog?.comments}</h1>
        <p>{blog?.description}</p>
        <img
          src={blog?.image}
          alt={blog?.description}
        /> */}

          <img src={blog?.image} alt="" className="object-cover h-[31.25em]" />

          <p className="text-[#FFF4E2] font-literata text-[3.25rem] font-medium mt-[0.5em]">
            Halloween Decoration Ideas For Your Home
          </p>

          <p className="text-[#90A3B1] font-inter text-[1rem] font-normal">
            July 18, 2022 No Comments
          </p>

          <p className="text-[#FFF4E2] font-inter text-[1.25rem] font-semibold mt-[2em]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>

          <p className="text-[#90A3B1] font-inter text-[1rem] font-normal mt-[2em]">
            Bibendum leo, sapien, nisl bibendum. Ultricies urna ultricies risus,
            at. Risus tincidunt netus et pellentesque maecenas pulvinar. Arcu
            duis tortor turpis nunc, nunc est blandit. Vel volutpat purus mauris
            condimentum amet tellus scelerisque semper blandit. Feugiat accumsan
            blandit acu, integer faucibus. At cursus elit hac vitae nec tortor
            iaculis viverra. Sem aliquet vulputate metus tristique sem commodo
            faucibus. Sagittis sittis eget at sit posuere est at. Eget eget id
            iaculis at{" "}
          </p>

          {/* <div className="flex items-center mt-[1em] ">
            <p className="text-[#90A3B1] font-inter text-[1rem] font-normal">
              Bibendum sit pharetra vitae pellentesque sodales neque mollis oci,
              purus. Feugiat volutp eu velit purus enim cum. Eu ipsum vierra
              isse placerat leo. Libero vel mi porttitor luctus viverra a vel
              veicula ultricies. Tellus egestas ac in sit et quis vitae. Metus
              auctor.
              <br />
              <br />
              Bibendum sit pharetra vitae pellentesque sodales neque mollis oci,
              purus. Feugiat volutp eu velit purus enim cum.
            </p>

            <img src={chineseMainCourse} alt="" className="object-cover" />
          </div> */}

          <div className="grid sm:grid-cols-2 mt-[2em] gap-[2em]">
            {/* Image (left on small, right on large) */}
            <div className="flex flex-col order-1 sm:order-2">
              <img
                src={chineseMainCourse}
                alt=""
                className="object-cover sm:h-[12.5em]"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col order-2 sm:order-1">
              <p className="text-[#90A3B1] font-inter text-[1rem] font-normal">
                Bibendum sit pharetra vitae pellentesque sodales neque mollis
                oci, purus. Feugiat volutp eu velit purus enim cum. Eu ipsum
                vierra isse placerat leo. Libero vel mi porttitor luctus viverra
                a vel veicula ultricies. Tellus egestas ac in sit et quis vitae.
                Metus auctor.
                <br />
                <br />
                Bibendum sit pharetra vitae pellentesque sodales neque mollis
                oci, purus. Feugiat volutp eu velit purus enim cum.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 mt-[2em] gap-[2em]">
            {/* Image */}
            <div className="flex flex-col sm:order-1 order-2">
              <img
                src={traditionalChineseFood}
                alt=""
                className="object-cover sm:h-[12.5em]"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col sm:order-1 order-2">
              <p className="text-[#90A3B1] font-inter text-[1rem] font-normal">
                Pellentesque augue diam augue lectus.
                <br />
                <br />
                Bibendum sit pharetra vitae pellentesque sodales neque mollis
                oci, purus. Feugiat volutp eu velit purus enim cum.
                <br />
                <br />
                Eu ipsum vierra isse placerat leo. Libero vel mi porttitor
                luctus viverra a vel veicula ultricies. Tellus egestas ac in sit
                et quis vitae. Metus auctor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
