
import whiteArrow from 'src/assets/home/white-arrow.svg'
import arrow from "src/assets/home/arrow.svg"
import { motion } from 'framer-motion'

export default function HomeHeroSection(){

  return(<>

    <div className="z-10 flex flex-col my-[9em]  max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green">


      <motion.p className="font-literata text-white text-[3.7em] sm:text-[7.1875em] not-italic leading-[1em] border border-[#50B498] green transition-all duration-1000 ease-in-out"
      
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
          },
        }}
        
      
      >Fresh, fast & delicious!</motion.p>

      <motion.p className="text-white font-inter text-[1.125rem] not-italic font-normal max-w-[33.4375em] mt-[0.9375em] transition-all duration-1000 ease-in-out"
      
      
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
          },
        }}
        
      
      
      >Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna.</motion.p>

    
      <div className="sm:flex sm:items-center border border-[#50B498] green mt-[2em] sm:gap-[1.875em]">


        <motion.div className='transition-all duration-1000 ease-in-out'

          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
            },
          }}
  

        >

          <div className="flex flex-col bg-[#E4C620] py-[0.75em] px-[1.5em] rounded-[3.125em] cursor-pointer  hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">






            <div className="flex items-center justify-center gap-[0.5em] ">

              <p className="font-inter text-[1rem] not-italic font-bold ">Book a Table</p>
              <img src={arrow} alt="" />

            </div>


          </div>


        </motion.div>
        




        <motion.div className='transition-all duration-1000 ease-in-out'

          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
            },
          }}
  

        >


          <div className="flex flex-col border border-white py-[0.75em] px-[1.5em] mt-[1em] sm:mt-[0em] rounded-[3.125em] cursor-pointer  hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out" >

            <div className="flex items-center justify-center gap-[0.5em] ">

              <p className="font-inter text-[1rem] not-italic font-bold text-white">The Menus</p>
              <img src={whiteArrow} alt="" />

            </div>


          </div>



        </motion.div>
       

   


      </div>

    
    </div>
    
    
  </>)
}