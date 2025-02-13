
import  deliciousfood from "src/assets/home/delicious-food.jpg"
import HomeHeroSection from "./_components/home-hero-section"
import HomeAboutUs from "./_components/about-us"


export default function Home() {
  
  return (<>



    <div className="relative flex flex-col  bg-cover bg-bottom" style={{
      backgroundImage: `url(${deliciousfood})`
    }}>


      {/* Overlay */}
      <div className="absolute inset-0 bg-[#28252E] opacity-40 "></div>

      <HomeHeroSection/>


    </div>



    <div className='relative bg-gradient-to-b from-[#BB3A12] to-[#28252E]/100'>


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>


      <HomeAboutUs />



    </div>

 





    
  </>)
}
  