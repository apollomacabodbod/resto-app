
import  deliciousfood from "src/assets/home/delicious-food.jpg"
import HomeHeroSection from "./_components/home-hero-section"


export default function Home() {
  
  return (<>



    <div className="relative flex flex-col  bg-cover bg-bottom" style={{
      backgroundImage: `url(${deliciousfood})`
    }}>


      {/* Overlay */}
      <div className="absolute inset-0 bg-[#28252E] opacity-30 "></div>

      <HomeHeroSection/>


    </div>

    
  </>)
}
  