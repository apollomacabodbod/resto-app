

import serveBox from "src/assets/serve/serve-box.svg"

export default function HomeServe(){


  return (<>


    <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] mt-[5.25em]">

      <div className="flex items-center justify-center gap-[0.5em]">

        <img src={serveBox} alt="" width={7}/>

        <p className="text-[#E4C620] font-inter text-[0.875rem] font-medium uppercase tracking-[0.1875em]" >Serve</p>


      </div>



      <p className="font-literata text-[3.25rem] text-white text-center not-italic font-medium leading-[1em] ">Fresh & Delicious</p>

        
        
    </div>
    
    
    
  </>)
}