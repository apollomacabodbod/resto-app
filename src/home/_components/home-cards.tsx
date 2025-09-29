import spaghetti from "src/assets/home-cards/spaghetti-meatball.jpg";

export default function HomeCards() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-64 w-[200px]"
        style={{
          backgroundImage: `url(${spaghetti})`,
        }}
      ></div>
    </>
  );
}
