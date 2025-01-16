
import  deliciousfood from "src/assets/home/delicious-food.jpg"
import HomeHeroSection from "./_components/home-hero-section"


export default function Home() {
  
  return (<>



    <div className="flex flex-col bg-center bg-cover" style={{
      backgroundImage: `url(${deliciousfood})`
    }}>

      <HomeHeroSection/>


    </div>

    
  </>)
}
  