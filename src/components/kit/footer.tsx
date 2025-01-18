
import logo from "src/assets/header/logo.svg"
import facebook from 'src/assets/footer/facebook.svg'
import instagram from 'src/assets/footer/instagram.svg'
import twitter from 'src/assets/footer/twitter.svg'
import youtube from 'src/assets/footer/youtube.svg'


import { motion } from "framer-motion"

export default function Footer(){

  return (<>


    <div className="bg-[#28252E] ">


      <div className="grid  grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 max-w-[1200px] lg:mx-auto px-[1.25em] gap-[3.75em] py-[6.25em] ">

        <div className="flex flex-col ">


          <motion.p className="text-[#E4C620] font-literata text-[1.5rem] not-italic font-medium transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          >Know About Resto.</motion.p>


          <motion.p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-normal mt-[1em] transition-all duration-1000 ease-in-out"
          
          
          
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
          
          
          
          >Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Morbi id at mauris dis tincidunt ipsum faucibus ipsum.</motion.p>



          <motion.img src={logo} alt="" width={120}  className="mt-[2em] transition-all duration-1000 ease-in-out"
          
          
          
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
          
          
          
          />

        </div>



        <div className="flex flex-col  gap-[1em]">


          <motion.p className="text-[#E4C620] font-literata text-[1.5rem] not-italic font-medium transition-all duration-1000 ease-in-out"
          
          
            
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
          
          
          
          >Opening Hours</motion.p>


          <motion.p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
          
             
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
          
          
          
          >Lorem ipsum dolor sit amet, consectetur</motion.p>



          <motion.div className="flex items-center justify-between transition-all duration-1000 ease-in-out"
          
          
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

            <p className="text-[#FFF4E2] ">Monday</p>
            <p className="text-[#90A3B1] ">Closed</p>


          </motion.div>



          <motion.div className="flex items-center justify-between transtition-all duration-1000 ease-in-out"
          
          
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

            <p className="text-[#FFF4E2] ">Tuesday</p>
            <p className="text-[#90A3B1] ">10 AM - 11 PM</p>


          </motion.div>




          <motion.div className="flex items-center justify-between transition-all duration-1000 ease-in-out"
          
          
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

            <p className="text-[#FFF4E2] ">Wednesday</p>
            <p className="text-[#90A3B1] ">10 AM - 11 PM</p>


          </motion.div>



          <motion.div className="flex items-center justify-between transition-all duration-1000 ease-in-out"
          
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

            <p className="text-[#FFF4E2] ">Thursday</p>
            <p className="text-[#90A3B1] ">10 AM - 11 PM</p>


          </motion.div>


          <motion.div className="flex items-center justify-between transition-all duration-1000 ease-in-out"
          
          
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

            <p className="text-[#FFF4E2] ">Friday</p>
            <p className="text-[#90A3B1] ">10 AM - 11 PM</p>


          </motion.div>


          <motion.div className="flex items-center justify-between transition-all duration-1000 ease-in-out"
          
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

            <p className="text-[#FFF4E2] ">Saturday</p>
            <p className="text-[#90A3B1] ">10 AM - 11 PM</p>


          </motion.div>


          <motion.div className="flex items-center justify-between transition-all duration-1000 ease-in-out"
          
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




            <p className="text-[#FFF4E2] ">Sunday</p>
            <p className="text-[#90A3B1] ">10 AM - 11 PM</p>


          </motion.div>



        </div>


        <div className="flex flex-col ">


          <motion.p className="text-[#E4C620] font-literata text-[1.5rem] not-italic font-medium transtion-all duration-1000 ease-in-out"
          
          
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
          
          
          
          >Contact</motion.p>

          <motion.p className="text-[#FFF4E2] mt-[1em] transition-all duration-1000 ease-in-out"
          
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
          
          
          >Address</motion.p>

          <motion.p className="text-[#90A3B1] transition-all duration-1000 ease-in-out"
          
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
          
          
          >768 Market Street San Francisco, CA 64015, United States</motion.p>

          <motion.p className="text-[#FFF4E2] mt-[0.5em] transition-all duration-1000 ease-in-out"
          
          
          
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
          
          
          
          >Phone</motion.p>

          <motion.p className="text-[#90A3B1] transition-all duration-1000 ease-in-out"
          
          
          
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
          
          
          
          >(+021) 345 678 910</motion.p>


          <motion.p className="text-[#FFF4E2] mt-[0.5em] transtion-all duration-1000 ease-in-out "
          
          
          
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
          
          
          
          >Email</motion.p>

          <motion.p className="text-[#90A3B1] transiton-all duration-1000 ease-in-out"
          
          
          
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
          
          
          
          >info@resto.com</motion.p>





          <div className="grid grid-cols-4 lg:gap-[2em] mt-[1em] ">





            <motion.div className="flex flex-col bg-[#37343E]  rounded-full w-[50px] h-[50px]  transition-all duration-1000 ease-in-out"


        
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
              <img src={facebook} alt="Facebook icon" className="w-[16px] h-[16px]  m-auto" />
            </motion.div>



            <motion.div className="flex flex-col bg-[#37343E] rounded-full w-[50px] h-[50px]  transition-all duration-1000 ease-in-out"


        
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
              <img src={twitter} alt="Facebook icon" className="w-[16px] h-[16px]  m-auto" />
            </motion.div>





            <motion.div className="flex flex-col bg-[#37343E] rounded-full w-[50px] h-[50px]  transition-all duration-1000 ease-in-out"


        
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
              <img src={instagram} alt="Facebook icon" className="w-[16px] h-[16px]  m-auto" />
            </motion.div>





            <motion.div className="flex flex-col bg-[#37343E] rounded-full w-[50px] h-[50px]  transition-all duration-1000 ease-in-out"


        
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
              <img src={youtube} alt="Facebook icon" className="w-[16px] h-[16px]  m-auto" />
            </motion.div>





          </div>


          {/* <div className="flex items-center gap-[1em] sm:justify-start sm:gap-[1em] lg:gap-[0em] lg:justify-between ">

            <motion.div className="flex flex-col bg-[#37343E] rounded-full w-[50px] h-[50px] mt-[1em] transition-all duration-1000 ease-in-out"
            
            
                    
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
              <img src={facebook} alt="Facebook icon" className="w-[16px] h-[16px]  m-auto" />
            </motion.div>

            <motion.div className="flex flex-col bg-[#37343E] rounded-full w-[50px] h-[50px] mt-[1em] transition-all duration-1000 ease-in-out"
            
            
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
              <img src={instagram} alt="Facebook icon" className="w-[16px] h-[16px]  m-auto" />
            </motion.div>


            <motion.div className="flex flex-col bg-[#37343E] rounded-full w-[50px] h-[50px] mt-[1em] transition-all duration-1000 ease-in-out"
            
            
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
              <img src={twitter} alt="Facebook icon" className="w-[16px] h-[16px]  m-auto" />
            </motion.div>



            <motion.div className="flex flex-col bg-[#37343E] rounded-full w-[50px] h-[50px] mt-[1em] transition-all duration-1000 ease-in-out"
            
            
            
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
              <img src={youtube} alt="Facebook icon" className="w-[16px] h-[16px]  m-auto" />
            </motion.div>


          </div> */}
 
    






        </div>




        <div className="flex flex-col gap-[1em]">


          <motion.p className="text-[#E4C620] font-literata text-[1.5rem] not-italic font-medium transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          
          >Newsletter</motion.p>


          <motion.p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-normal mt-[1em] transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          
          >Subscribe our newsletter & get all promo!</motion.p>


          <motion.input type="text" className="outline-none py-[0.75em] px-[1em] text-[#90A3B1] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out" 
          
          
          
            
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
          
          
          
          
          
          />





          <motion.div className="flex items-center transition-all duration-1000 ease-in-out"
          
          
          
                      
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

            <p className="bg-[#E4C620] py-[0.75em] px-[1.5em] rounded-[3.125em] text-[#28252E] font-inter text-[1rem] not-italic font-bold cursor-pointer  hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">Subscribe</p>


          </motion.div>



        </div>










      </div>



    


    </div>


    <div className="border-t-2  border-dotted border-[#90A3B1] bg-[#28252E]">


      <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] py-[2em] ">

        <div className="sm:flex sm:items-center sm:justify-center sm:gap-[2em] ">


          <motion.p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-bold mt-[0.5em] transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          >HOME</motion.p>
          <motion.p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-bold mt-[0.5em]  transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          >RESERVATION</motion.p>
          <motion.p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-bold mt-[0.5em]  transition-all duration-1000 ease-in-out"
          
          
          
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
          
          
          
          >MENU</motion.p>
          <motion.p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-bold mt-[0.5em]  transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          
          >BLOG</motion.p>
          <motion.p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-bold mt-[0.5em]  transition-all duration-1000 ease-in-out"
          
          
          
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
          
          
          
          >SHOP</motion.p>
          <motion.p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-bold mt-[0.5em]  transition-all duration-1000 ease-in-out"
          
          
          
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
          
          
          
          >CONTACT</motion.p>


        </div>

        <motion.p className="text-center text-[#90A3B1] font-inter text-[0.8125rem] not-italic font-normal mt-[2em] transition-all duration-1000 ease-in-out"
        
        
         
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
        
        
        
        >© 2025 Resto.  All Rights Reserved.</motion.p>


      </div>





    </div>
    
    
  </>)
}