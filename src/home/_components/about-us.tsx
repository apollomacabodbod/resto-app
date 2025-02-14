import box from 'src/assets/home/about-us-box.svg'
import redArrow from 'src/assets/about/about-us-arrow.svg'
import smilingFemale from 'src/assets/about/smiling-female.jpg'
import diningTable from 'src/assets/about/dining-table.jpg'

export default function HomeAboutUs() {
  return (


    <div className="relative max-w-[1200px] lg:mx-auto px-[1.25em]  border border-[#58B498] green pt-[20em] z-20">

        
      <div className="relative flex flex-col border border-[#58B498] green p-[3em]  md:max-w-[85%] xl:max-w-[30.4375em] bg-white  ">



        <div className="flex items-center gap-[0.28125em]">
          <img src={box} alt="" />
          <p className="text-[#90A3B1] font-inter text-[0.875rem]">About</p>
        </div>
  
        <p className="font-literata text-[#BB3A12] text-[3.25rem] not-italic font-medium leading-[1em]">
            About Us
        </p>

        <p className='mt-[2em] text-[#28252E] font-inter text-[1rem] not-italic font-normal'>
            
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id at mauris dis tincidunt ipsum faucibus ipsum. At laoreet vivamus ultrices dolor vel nisl.
          <br   />
          <br   />
           Leo, ultrices enim vel feugiat lectus nisi, phasellus egestas. Nullam tellus aliquam. At laoreet vivamus ultrices dolor vel nisl.</p>
        

        <div className='flex items-center mt-[2em] cursor-pointer'>

          <div className='flex flex-col border border-[#BB3A12] py-[0.75em] px-[1.5em] rounded-[3.125em]'>


            <div className='flex items-center gap-[0.5em]'>

              <p className='text-[#BB3A12] font-inter text-[1rem] not-italic font-bold'>Learn More</p>


              <img src={redArrow} alt="" className='w-[0.4375em]'/>

            </div>


          </div>


             

        </div>




        <img src={smilingFemale} alt="" className='absolute  top-[-13em] md:top-[-14em]  xl:top-[-14em]  left-0   md:left-[10%] xl:left-[30%]   w-[50%] xl:w-[34.75em] h-[15em] lg:h-[20em] md:h-[20em] xl:h-[32.5em] object-top  object-cover z-[-1]' />
      
      
        <img src={diningTable} alt="" className='absolute  top-[-13em] md:top-[-14em]  right-0  md:right-[-17.5%]  xl:right-[-137%]   w-[50%] xl:w-[28.5625em] h-[15em] md:h-[20em] xl:h-[32.5em] object-top  object-cover z-[-1]' />









        
      </div> 



    







    </div>
  );
}
  