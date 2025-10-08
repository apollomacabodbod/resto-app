import festiveDinner from "src/assets/home-services/festive-dinner.jpg";

export default function HomeServicesCorporate() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
            <img src={festiveDinner} alt="" className="w-full bg-cover " />
          </div>

          <div className="flex flex-col">
            <p>Corporate</p>
            <p>
              Mauris dis tincidunt ipsum faucibus ipsum laoret vivamus ultrices
              dolor vel nisl ultrices enim vel feugiat lectus nisi phasellus
              egestas{" "}
            </p>

            <button className="flex items-center">
              <p>Book Now</p>
              <img src="" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
