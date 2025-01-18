
import logo from "src/assets/header/logo.svg"
import facebook from 'src/assets/footer/facebook.svg'
import instagram from 'src/assets/footer/instagram.svg'
import twitter from 'src/assets/footer/twitter.svg'
import youtube from 'src/assets/footer/youtube.svg'

export default function Footer(){

  return (<>


    <div className="bg-[#28252E] ">


      <div className="grid  grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 max-w-[1200px] lg:mx-auto px-[1.25em] gap-[1.5em]  py-[6.25em] ">

        <div className="flex flex-col border border-[#50B498] green">


          <p className="text-[#E4C620] font-literata text-[1.5rem] not-italic font-medium ">Know About Resto.</p>


          <p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-normal mt-[1em]">Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Morbi id at mauris dis tincidunt ipsum faucibus ipsum.</p>



          <img src={logo} alt="" width={120}  className="mt-[2em]"/>

        </div>



        <div className="flex flex-col border border-[#50B498] green gap-[1em]">


          <p className="text-[#E4C620] font-literata text-[1.5rem] not-italic font-medium ">Opening Hours</p>


          <p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-normal ">Lorem ipsum dolor sit amet, consectetur</p>



          <div className="flex items-center justify-between">

            <p className="text-[#FFF4E2] ">Monday</p>
            <p className="text-[#90A3B1] ">Closed</p>


          </div>



          <div className="flex items-center justify-between">

            <p className="text-[#FFF4E2] ">Tuesday</p>
            <p className="text-[#90A3B1] ">10 AM - 11 PM</p>


          </div>




          <div className="flex items-center justify-between">

            <p className="text-[#FFF4E2] ">Wednesday</p>
            <p className="text-[#90A3B1] ">10 AM - 11 PM</p>


          </div>



          <div className="flex items-center justify-between">

            <p className="text-[#FFF4E2] ">Thursday</p>
            <p className="text-[#90A3B1] ">10 AM - 11 PM</p>


          </div>


          <div className="flex items-center justify-between">

            <p className="text-[#FFF4E2] ">Friday</p>
            <p className="text-[#90A3B1] ">10 AM - 11 PM</p>


          </div>


          <div className="flex items-center justify-between">

            <p className="text-[#FFF4E2] ">Saturday</p>
            <p className="text-[#90A3B1] ">10 AM - 11 PM</p>


          </div>


          <div className="flex items-center justify-between">

            <p className="text-[#FFF4E2] ">Sunday</p>
            <p className="text-[#90A3B1] ">10 AM - 11 PM</p>


          </div>



        </div>


        <div className="flex flex-col border border-[#50B498] green ">


          <p className="text-[#E4C620] font-literata text-[1.5rem] not-italic font-medium ">Contact</p>

          <p className="text-[#FFF4E2] mt-[1em]">Address</p>

          <p className="text-[#90A3B1]">768 Market Street San Francisco, CA 64015, United States</p>

          <p className="text-[#FFF4E2] mt-[0.5em]">Phone</p>

          <p className="text-[#90A3B1]">(+021) 345 678 910</p>


          <p className="text-[#FFF4E2] mt-[0.5em]">Email</p>

          <p className="text-[#90A3B1]">info@resto.com</p>




          <div className="flex items-center gap-[1em] sm:justify-start sm:gap-[1em] lg:gap-[0em] lg:justify-between ">

            <div className="flex flex-col bg-[#37343E] rounded-full w-[50px] h-[50px] mt-[1em]">
              <img src={facebook} alt="Facebook icon" className="w-[16px] h-[16px]  m-auto" />
            </div>

            <div className="flex flex-col bg-[#37343E] rounded-full w-[50px] h-[50px] mt-[1em]">
              <img src={instagram} alt="Facebook icon" className="w-[16px] h-[16px]  m-auto" />
            </div>


            <div className="flex flex-col bg-[#37343E] rounded-full w-[50px] h-[50px] mt-[1em]">
              <img src={twitter} alt="Facebook icon" className="w-[16px] h-[16px]  m-auto" />
            </div>



            <div className="flex flex-col bg-[#37343E] rounded-full w-[50px] h-[50px] mt-[1em]">
              <img src={youtube} alt="Facebook icon" className="w-[16px] h-[16px]  m-auto" />
            </div>


          </div>
 
    






        </div>




        <div className="flex flex-col border border-[#50B498] green gap-[1em]">


          <p className="text-[#E4C620] font-literata text-[1.5rem] not-italic font-medium ">Newsletter</p>


          <p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-normal mt-[1em]">Subscribe our newsletter & get all promo!</p>


          <input type="text" className="outline-none py-[0.75em] px-[1em] text-[#90A3B1] font-inter text-[1rem] not-italic font-normal " />





          <div className="flex items-center">

            <p className="bg-[#E4C620] py-[0.75em] px-[1.5em] rounded-[3.125em] text-[#28252E] font-inter text-[1rem] not-italic font-bold cursor-pointer  hover:opacity-100 transition-opacity duration-1000 ease-in-out active:scale-95 active:transition-transform active:duration-200 active:ease-out">Subscribe</p>


          </div>



        </div>










      </div>



    


    </div>


    <div className="border-t-2  border-dotted border-[#90A3B1] bg-[#28252E]">


      <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] py-[2em] ">

        <div className="sm:flex sm:items-center sm:justify-center sm:gap-[2em] ">


          <p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-bold mt-[0.5em]">HOME</p>
          <p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-bold mt-[0.5em]">RESERVATION</p>
          <p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-bold mt-[0.5em]">MENU</p>
          <p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-bold mt-[0.5em]">BLOG</p>
          <p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-bold mt-[0.5em]">SHOP</p>
          <p className="text-[#90A3B1] font-inter text-[1rem] not-italic font-bold mt-[0.5em]">CONTACT</p>


        </div>

        <p className="text-center text-[#90A3B1] font-inter text-[0.8125rem] not-italic font-normal mt-[2em]">© 2025 Resto.  All Rights Reserved.</p>


      </div>





    </div>
    
    
  </>)
}