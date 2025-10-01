import { useState, useEffect } from "react";
import altRestaurant from "src/assets/home-carousel/at-restaurant.jpg";
import attractiveCouple from "src/assets/home-carousel/attractive-couple.jpg";
import happyYoungFriends from "src/assets/home-carousel/happy-young-friends.jpg";
import multiCulturalGroup from "src/assets/home-carousel/multi-cultural-group.jpg";
import vegetarianRestaurant from "src/assets/home-carousel/vegetarian-restaurant.jpg";
const slides = [
  {
    id: 1,
    bg: altRestaurant,
    title: "Slide One",
    desc: "This is the first slide",
  },
  {
    id: 2,
    bg: attractiveCouple,
    title: "Slide Two",
    desc: "This is the second slide",
  },
  {
    id: 3,
    bg: happyYoungFriends,
    title: "Slide Three",
    desc: "This is the third slide",
  },

  {
    id: 4,
    bg: multiCulturalGroup,
    title: "Slide Three",
    desc: "This is the third slide",
  },

  {
    id: 5,
    bg: vegetarianRestaurant,
    title: "Slide Three",
    desc: "This is the third slide",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  //   const nextSlide = () => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   };

  //   const prevSlide = () => {
  //     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  //   };

  // Auto-play with useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // changes every 3s

    return () => clearInterval(timer); // cleanup when unmounted
  }, []);

  return (
    <div
      className="mt-[10.1875em] relative w-full h-[28.125em] bg-cover bg-center bg-no-repeat flex items-center justify-center  transition-all duration-500"
      style={{
        backgroundImage: `url(${slides[current].bg})`,
      }}
    >
      {/* Prev Button */}

      {/* Dots */}
      <div className="absolute bottom-[1.125em] flex gap-[0.75em]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-[0.5625em] h-[0.5625em] rounded-full ${
              current === index ? "bg-slate-500" : "bg-[#FFF]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
