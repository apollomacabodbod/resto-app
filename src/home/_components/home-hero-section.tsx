
import whiteArrow from 'src/assets/home/white-arrow.svg'
import arrow from "src/assets/home/arrow.svg"

export default function HomeHeroSection(){

  return(<>

    <div className="z-10 flex flex-col my-[9em]  max-w-[1200px] lg:mx-auto px-[1.25em]">


      <p className="font-literata text-white text-[7.1875em] not-italic leading-[1em] ">Fresh, fast & delicious!</p>

      <p className="text-white font-inter text-[1.125rem] not-italic font-normal max-w-[33.4375em] mt-[0.9375em]" >Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna.</p>

    
      <div className="flex items-center border border-[#50B498] green mt-[2em] gap-[1.875em]">

        <div className="flex flex-col bg-[#E4C620] py-[0.75em] px-[1.5em] rounded-[3.125em]">

          <div className="flex items-center gap-[0.5em] ">

            <p className="font-inter text-[1rem] not-italic font-bold ">Book a Table</p>
            <img src={arrow} alt="" />

          </div>


        </div>


        <div className="flex flex-col border border-white py-[0.75em] px-[1.5em] rounded-[3.125em]">

          <div className="flex items-center gap-[0.5em] ">

            <p className="font-inter text-[1rem] not-italic font-bold text-white">The Menus</p>
            <img src={whiteArrow} alt="" />

          </div>


        </div>


      </div>
    
    </div>
    
    
  </>)
}