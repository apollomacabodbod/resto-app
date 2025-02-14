
import { motion } from 'framer-motion'
import serveBox from "src/assets/serve/serve-box.svg"

export default function HomeServe(){


  return (<>


    <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] mt-[5.25em] pb-[23.875em]">

      <motion.div className="flex items-center justify-center gap-[0.5em]"
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
          },
        }}
      
      
      >

        <img src={serveBox} alt="" width={7}/>

        <p className="text-[#E4C620] font-inter text-[0.875rem] font-medium uppercase tracking-[0.1875em]" >Serve</p>


      </motion.div>



      <motion.p className="font-literata text-[3.25rem] text-white text-center not-italic font-medium leading-[1em] "
      
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
          },
        }}
      
      
      >Fresh & Delicious</motion.p>

        

      <motion.p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-normal text-center mt-[1em] "
      
      
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 1, ease: "easeInOut" }, // Smooth transition
          },
        }}
      
      
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Morbi id at mauris dis tincidunt ipsum faucibus ipsum.</motion.p>
        
    </div>
    
    
    
  </>)
}