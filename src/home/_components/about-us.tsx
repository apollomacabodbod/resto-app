import box from 'src/assets/home/about-us-box.svg'
import redArrow from 'src/assets/about/about-us-arrow.svg'

export default function HomeAboutUs() {
  return (


    <div className="max-w-[1200px] lg:mx-auto px-[1.25em]  border border-[#58B498] green pt-[16.5em]">

        
      <div className="flex flex-col border border-[#58B498] green p-[3em] max-w-[30.4375em] bg-white  ">



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
        
      </div>



    </div>
  );
}
  